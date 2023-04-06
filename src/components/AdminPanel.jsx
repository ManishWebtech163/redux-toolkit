import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addAdminData } from '../store/slices/adminSlice';
import { useEffect } from 'react';
import { clearAllUsers } from '../store/slices/userSlice';

function AdminPanel() {
    let chance = Chance()
    const dispatch = useDispatch()

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    //   ---functions---
    //add user
    const addUserFun = () => {
        dispatch(addAdminData())
    }
    // clear all admin data
    const clearAllData = () => {
        dispatch(clearAllUsers())
    }



    useEffect(() => {
        addUserFun()
    }, [])


    // --access store data--
    const storeData = useSelector(state => state.admin)
    console.log(storeData)

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', mt: 2, p: 2, overflow: "auto" }} >
                    <marquee direction="right">  <Typography sx={{ fontSize: "2rem", }}> Redux Toolkit </Typography> </marquee>
                    {/* <Button onClick={addUserFun}>Add Item</Button> */}
                    <Grid container spacing={2}>
                        {/* --data-- */}
                        {storeData && storeData.map((e) => {
                            return (
                                <Grid xs={12} key={e}>
                                    <Item>
                                        <Grid container>
                                            <Grid xs={4}>{e}</Grid>
                                            <Grid xs={4}>asd</Grid>
                                            <Grid xs={2}>asd</Grid>
                                            <Grid xs={2}> <Button onClick={() => deleteUser(e)}>Delete Item</Button> </Grid>
                                        </Grid>
                                    </Item>
                                </Grid>
                            )
                        })}


                        {/* --//data-- */}
                    </Grid>
                    <Button onClick={() => clearAllData()}>Clear All Item</Button>
                </Box>
            </Container>
        </>
    )
}

export default AdminPanel