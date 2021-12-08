import { filter } from 'lodash';
// import { sentenceCase } from 'change-case';
import React, { useState, useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
// import { Box } from '@mui/material';


// material
import {
	Card,
	Table,
	Stack,
	Avatar,
	Button,
	Checkbox,
	TableRow,
	TableBody,
	TableCell,
	Container,
	Typography,
	TableContainer,
	TablePagination,
	Chip,
	Box,
	IconButton,
} from '@mui/material';
// components
// import Page from '../components/Page';
// import Label from '../components/Label';
import Scrollbar from '../Scrollbar';
import SearchNotFound from '../SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../User';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {getAllUserApi,changeLockUserApi} from '../../../../Apis/admin.api'
import toastNotify from '../../../Toast'
import Preload from '../Preload'
//
// import USERLIST from '../_mocks_/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
	{ id: 'username', label: 'UserName', alignRight: false },
	{ id: 'email', label: 'Email', alignRight: false },
	{ id: 'name', label: 'Name', alignRight: false },
	{ id: 'role', label: 'Role', alignRight: false },
	{ id: 'isVerified', label: 'Verified', alignRight: false },
	{ id: 'status', label: 'Status', alignRight: false },
	{ id: 'action',label: 'Action', alignRight: true}
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	if (query) {
		return filter(
			array,
			_user => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
		);
	}
	return stabilizedThis.map(el => el[0]);
}



export default function CRUDTable() {
	const [page, setPage] = useState(0);
	const [order, setOrder] = useState('asc');
	const [selected, setSelected] = useState([]);
	const [orderBy, setOrderBy] = useState('name');
	const [filterName, setFilterName] = useState('');
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [USERLIST, setUSERLIST] = useState([])
	const [filterChangeLock, setFilterChangeLock] = useState(false)

	const [loading, setLoading] = useState(false)
	const [completed, setCompleted] = useState(false)

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleSelectAllClick = event => {
		if (event.target.checked) {
			const newSelecteds = USERLIST.map(n => n.username);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];
		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
		}
		setSelected(newSelected);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleFilterByName = event => {
		setFilterName(event.target.value);
	};

	

	const handleChangeLock = async(e) => {
		const id =  e.currentTarget.value;
		const res = await changeLockUserApi(id)
		if (res.success) {
			toastNotify('This user has been changed the lock', 'success');
			setFilterChangeLock(!filterChangeLock)
		} else {
			toastNotify(res.message, 'error');
		}
	};

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

	const filteredUsers = applySortFilter(
		USERLIST,
		getComparator(order, orderBy),
		filterName
	);

	const isUserNotFound = filteredUsers.length === 0;

	useEffect(() => {
		setTimeout(() =>{
			(async () => {
				const res = await getAllUserApi()
				setUSERLIST(res.users)
				setLoading(true)

				setTimeout(()=>{
					setCompleted(true)
				},1000)
			})();
		},2000)
    }, [filterChangeLock]);


	return (
		<>
		{!completed ? 
			<>
			{!loading? <Preload type={1}></Preload> : <Preload type={3}></Preload> }
			</>
			
		:<Box>
			<Container>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='space-between'
					mb={5}>
					<Typography variant='h4' gutterBottom sx={{color: '#9B2335', fontWeight: 600}}>
						User
					</Typography>
				</Stack>

				<Card sx={{ '& .simplebar-placeholder': { maxHeight: '50px' } }}>
					<UserListToolbar
						numSelected={selected.length}
						filterName={filterName}
						onFilterName={handleFilterByName}
					/>

					<Scrollbar>
						<TableContainer sx={{ minWidth: 800 }}>
							<Table>
								<UserListHead
									order={order}
									orderBy={orderBy}
									headLabel={TABLE_HEAD}
									rowCount={USERLIST.length}
									numSelected={selected.length}
									onRequestSort={handleRequestSort}
									onSelectAllClick={handleSelectAllClick}
								/>
								<TableBody>
									{filteredUsers
										.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
										.map(row => {
											const {
												_id,
												username,
												role,
												name,
												status,
												email,
												image,
												activate,
												lock,
											} = row;
											const isItemSelected = selected.indexOf(username) !== -1;

											return (
						
												<TableRow
													hover
													key={_id}
													tabIndex={-1}
													role='checkbox'
													selected={isItemSelected}
													aria-checked={isItemSelected}
													>
													
													<TableCell padding='checkbox'>
														<Checkbox
															checked={isItemSelected}
															onChange={event => handleClick(event, username)}
														/>
													</TableCell>
													<TableCell component='th' scope='row' padding='none'>
														<Stack
															direction='row'
															alignItems='center'
															spacing={2}>
															<Avatar alt={username} src={image === "" || image === "upload/image/1.png" ? "hiphop-g28.herokuapp.com/upload/image/1.png" : image } />
															<Typography variant='subtitle2' noWrap>
																{username}
															</Typography>
														</Stack>
													</TableCell>
													<TableCell align='left'>{email}</TableCell>
													<TableCell align='left'>{name}</TableCell>
													<TableCell align='left'>{role === 0 ? 'user' : role===1? 'admin':'superadmin' }</TableCell>
													<TableCell align='left'>
														{activate ? 'Yes' : 'No'}
													</TableCell>
													<TableCell align='left'>
														{lock ? 
														<Chip
															color='error'
															label='Locked'
															sx={{ marginRight: '0.1rem' }}
														/>
														:
														<Chip
														color='success'
														label='Active'
														sx={{ marginRight: '0.1rem' }}
														/>
														}
														
														
													</TableCell>

													<TableCell align='right'>
														<IconButton  onClick={handleChangeLock} value={_id} >
															{lock ?<LockOpenIcon sx={{width: 20, height:20}} value={_id}></LockOpenIcon> :<LockIcon sx={{width: 20, height:20, color: '#9b2335'}} value={_id}  />}
        													
      													</IconButton>
													</TableCell>

												</TableRow>
										
											);
										})}
									{emptyRows > 0 && (
										<TableRow style={{ height: 53 * emptyRows }}>
											<TableCell colSpan={6} />
										</TableRow>
									)}
								</TableBody>
								{isUserNotFound && (
									<TableBody>
										<TableRow>
											<TableCell align='center' colSpan={6} sx={{ py: 3 }}>
												<SearchNotFound searchQuery={filterName} />
											</TableCell>
										</TableRow>
									</TableBody>
								)}
							</Table>
						</TableContainer>
					</Scrollbar>

					<TablePagination
						rowsPerPageOptions={[5, 10, 25]}
						component='div'
						count={USERLIST.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Card>
			</Container>
		</Box>
		}
		</>
	);
}
