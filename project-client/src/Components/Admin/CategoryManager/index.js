import React, {useState, useEffect} from 'react'
import lodash from 'lodash'
import AddIcon from '@mui/icons-material/Add';
import { Link as RouterLink } from 'react-router-dom';
import { CategoryCard, CategoryMore, CategorySearch, CategoryModal } from '../Common/CategoryCard';
import {
    Box,
    Container,
    Stack,
    Typography,
    Grid,
    Button,
    Divider,
} from '@mui/material';
import toastNotify from'../../Toast';
import {getCategoryApi, getAllCategoryApi} from '../../../Apis/admin.api'
import Preload from '../Common/Preload'

const MODALNEWCATEGORY ={
    title: 'NEW CATEGORY',
    typeCreate: true,
    chill: [
    {id: 1 , field: 'Category Name', inputName: 'categoryname'},
    {id: 2 , field: 'Description',inputName: 'description'},

    ]
}



const CategoryManager = () => {
    const [open, setOpen] = useState(false);
    const [CATEGORY, setCATEGORY] = useState([]);
    const [pagination,setPagination] = useState({_page: 1, _limit: 5})
    const [filter,setFilter] = useState()

    const [loading, setLoading] = useState(false)
	const [completed, setCompleted] = useState(false)

    const pageNumber = Math.ceil(pagination._total / pagination._limit)

    const [CATEGORYALL, setCATEGORYALL] = useState([])
    const [search,setSearch] = useState('')
    const [checkLength, setCheckLength] = useState(false)
    const [CATEGORYLISTNEW, setCATEGORYLISTNEW] = useState([])


    const handleSeeMore  = () => {
        setPagination({
            _page: pagination._page + 1,
            _limit: pagination._limit,
            _total: pagination._total
        })
        setFilter(pagination)
    }

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        setOpen(true)
    }

    useEffect(() => {
        setTimeout(() =>{
            (async () => {
                const res = await getCategoryApi({page: pagination._page, limit :pagination._limit})
                setPagination(res.pagination)
                setCATEGORY(CATEGORY.concat(res.category))

                const res1 = await getAllCategoryApi()
                setCATEGORYALL(res1.category)

                setLoading(true)
				  setTimeout(()=>{
				  	setCompleted(true)
				  },1000)
            })();
        },250)
        
    }, [filter]);

    return (
        <>
        {!completed ?
            <>
              <Box sx={{marginTop: '-155px',}}>
              {!loading? <Preload  type={1}></Preload> : <Preload type={3}></Preload> }
              </Box>
            </>


        :<Box
        sx={{
            marginTop: '-155px',
            // margin-bottom: 10px;
            border: '1px solid #9B2335',
            boxShadow: '0 0 10px 5px #9B2334',
            backgroundColor: '#fff',
            borderRadius: '5px',
            padding: '16px 0px',
            height: 'auto',
            }}
        >
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom sx={{color: '#9B2335', fontWeight: 600}}>
                  Category
                </Typography>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                    sx={{
                        backgroundColor: '#9B2335',
                        '&:hover': {
                            backgroundColor: '#7b1c2a',
                        }
                    }}
                    
                  >
                    New Category
                  </Button>
                </Stack>

                <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
                  <CategorySearch category={CATEGORYALL} setCATEGORYLISTNEW={setCATEGORYLISTNEW} setCheckLength={setCheckLength} total={pagination._total}  /> 
                </Stack>
                <Box sx={{p:2,height: '440px', overflowY: 'auto', overflowX: 'hidden'}}>
                <Grid container  xs={12} rowSpacing={2}>
                    
                    {!checkLength?
                    CATEGORY.map((category, index) => (
                        <Grid item xs={12} key={index} >
                            <CategoryCard key={category.id} category={category} index={index} handleUpdate={handleUpdate} />
                        </Grid>
                    ))
                    :CATEGORYLISTNEW.map((category, index) => (
                        <Grid item xs={12} key={index} >
                            <CategoryCard key={category.id} category={category} index={index} handleUpdate={handleUpdate} />
                        </Grid>
                    ))
                    }
                    <Grid item xs={12} sx={{mt: 2}}>
                        <Divider orientation="orientation"  variant />
                    </Grid>
                    
                    <Grid item xs={12} sx={{mt: 2}}>
                        {pageNumber !== pagination._page ? <CategoryMore handleSeeMore={handleSeeMore}></CategoryMore> : <></>}
                    </Grid>
                    
                </Grid>
                </Box>
            </Container>
            <CategoryModal  open={open} handleClose={handleClose} {...MODALNEWCATEGORY} ></CategoryModal>

        </Box>
            }
        </>
    )
}

export default CategoryManager
