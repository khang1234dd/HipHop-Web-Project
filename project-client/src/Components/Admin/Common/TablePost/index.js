import React from 'react'
import { orange, red } from '@mui/material/colors';
import { 
  styled,
  Button,
  Switch,
  CardHeader,
  Avatar,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,tableCellClasses,TableBody,Table,
  Chip,
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('Frozen yoghurt', 'asdasdasdasdasdasdasdasd', 6.0, 24),
    createData('Ice cream sandwich', 'asdasdasdasdasdasdasdasd', 9.0, 37),
    createData('Eclair', 'asdasdasdasdasdasdasdasd', 16.0, 24),
    createData('Cupcake', 'asdasdasdasdasdasdasdasd', 3.7, 67),
    createData('Gingerbread', 'asdasdasdasdasdasdasdasd', 16.0, 49),
  ];

const TablePost = () => {
  const [checked, setChecked] = React.useState(true);
  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleDelete = () => {
    console.log('delete')
  
  }

    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Owner</StyledTableCell>
            <StyledTableCell >Post Name</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Public</StyledTableCell>
            <StyledTableCell align="right">Banned</StyledTableCell>
            <StyledTableCell align="right">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">

              <CardHeader sx={{padding: 0}}
                avatar={
                  <Avatar sx={{ width: '40px',height:'40px' }} src="http://hiphop-g28.herokuapp.com/upload/image/1.png"  alt="" />
                }
                title="User"
                subheader={row.name}
              />
                  
                
              </StyledTableCell >
              <StyledTableCell component="th" scope="row">
                {row.calories}
                </StyledTableCell>
              <StyledTableCell align="right">
                <Chip color="success" label="Pass" sx={{marginRight: '0.1rem'}}/>
                <Chip color="secondary" label="Private" sx={{marginRight: '0.1rem'}}/>
                <Chip color="error" label="Banned" sx={{marginRight: '0.1rem'}}/>
                <Chip color="warning" label="Hot" onDelete={handleDelete} sx={{marginRight: '0.1rem'}}/>
                </StyledTableCell>
              <StyledTableCell align="right">
              <Switch
                checked={checked}
                onChange={handleSwitchChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
                </StyledTableCell>
              <StyledTableCell align="right">
                <Switch
                  checked={checked}
                  onChange={handleSwitchChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{color: {'& .MuiSwitch-switchBase.Mui-checked': {
                    color: red[600],
                    '&:hover': {
                      backgroundColor: red[600],
                    },
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: red[600],
                  },}}}
                />
                </StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" color="success" >
                  Pass
                </Button>
                <Button variant="contained" sx={{backgroundColor: orange[600],  '&:hover': {backgroundColor: orange[700]}, marginLeft: '0.2rem'}} >
                  Hot
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default TablePost
