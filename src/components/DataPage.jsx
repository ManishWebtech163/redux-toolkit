import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Chance from 'chance';
import { addUser, clearAllUsers, removeUser } from '../store/slices/userSlice';

export default function DataPage() {
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
        let userCreate = `${chance.first()} ${chance.last()}`;
        dispatch(addUser(userCreate))
    }

    // delete user
    const deleteUser = (e) => {
        dispatch(removeUser(e))
    }

    //clearAllUsers
    const clearAll_Users = () => {
        dispatch(clearAllUsers())
    }


    // --access store data--
    const storeData = useSelector(state => state.users)
    console.log(storeData)

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', mt: 2, p: 2 }} >
                    <marquee direction="right">  <Typography sx={{ fontSize: "2rem", }}> Redux Toolkit </Typography> </marquee>
                    <Button onClick={addUserFun}>Add Item</Button>
                    <Grid container spacing={2}>
                        {/* --data-- */}
                        {storeData && storeData.map((e) => {
                            return (
                                <Grid xs={12}>
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
                    <Button onClick={() => clearAll_Users()}>Clear All Item</Button>
                </Box>
            </Container>
        </React.Fragment>
    );
}