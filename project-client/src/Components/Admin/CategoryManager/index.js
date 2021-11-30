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
import {getCategoryApi} from '../../../Apis/admin.api'

const MODALNEWCATEGORY ={
    title: 'NEW CATEGORY',
    typeCreate: true,
    chill: [
    {id: 1 , field: 'Category Name', inputName: 'categoryname'},
    {id: 2 , field: 'Description',inputName: 'description'},

    ]
}
const MODALUPDATECATEGORY ={
    title: 'UPDATE CATEGORY',
    typeCreate: false,
    chill: [
    {id: 1 , field: 'Category Name', inputName: 'categoryname'},
    {id: 2 , field: 'Description', inputName: 'description'},

    ]
}


const CategoryManager = () => {
    const [open, setOpen] = useState(false);
    const [typeModal, setTypeModal] = useState(1);
    const [CATEGORY, setCATEGORY] = useState([]);
    const [seemore, setSeeMore] = useState(1);
    const [data,setData] = useState(true);

    const handleData  = async() => { 
        if(!data){
            const res = await getCategoryApi({page: CATEGORY.length + 1, limit:1})
            setCATEGORY(CATEGORY.concat(res.category))
        }
        
    }

    const handleSeeMore  = () => {
        setSeeMore(seemore +1);
        setData(true);
    }

    const handleOpen = () => {
        setTypeModal(1);
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

    const handleUpdate = () => {
        setTypeModal(2);
        setOpen(true)
    }

    useEffect(() => {
        (async () => {
            const pageNumber = seemore;
    		const res = await getCategoryApi({page: pageNumber, limit:3})
            setCATEGORY(CATEGORY.concat(res.category))
            if(res.category.length <= 0){
                setData(false)
                
            }
            // console.log(CATEGORY)
    		// console.log(res);
    	})();
    }, [seemore]);

    return (
        <Box
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
                  <CategorySearch category={CATEGORY}  /> 
                  {/* options={SORT_OPTIONS} */}
                  {/* <CategorySort  /> */}
                </Stack>
                <Box sx={{p:2,height: '440px', overflowY: 'auto', overflowX: 'hidden'}}>
                <Grid container  xs={12} rowSpacing={2}>
                    
                    {CATEGORY.map((category, index) => (
                        <Grid item xs={12} key={index} >
                            <CategoryCard key={category.id} category={category} index={index} handleUpdate={handleUpdate} />
                        </Grid>
                    ))}
                    <Grid item xs={12} sx={{mt: 2}}>
                        <Divider orientation="orientation"  variant />
                    </Grid>
                    
                    <Grid item xs={12} sx={{mt: 2}}>
                        <CategoryMore handleSeeMore={handleSeeMore} data={data}></CategoryMore>
                    </Grid>
                    
                </Grid>
                </Box>
            </Container>
            {typeModal === 1 ? 
                <CategoryModal open={open} handleClose={handleClose} {...MODALNEWCATEGORY} handleData={handleData} ></CategoryModal>
            : <CategoryModal open={open} handleClose={handleClose} {...MODALUPDATECATEGORY} handleData={handleData} ></CategoryModal>
            }
            
        </Box>

        
    )
}

export default CategoryManager
