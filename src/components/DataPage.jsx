import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';

export default function DataPage() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', mt: 2, p: 2 }} >
                    <marquee direction="right">  <Typography sx={{ fontSize: "2rem", }}> Redux Toolkit </Typography> </marquee>
                    <Button>Add Item</Button>
                    <Grid container spacing={2}>
                        {/* --data-- */}
                        <Grid xs={12}>
                            <Item>
                                <Grid container>
                                    <Grid xs={4}>asd</Grid>
                                    <Grid xs={4}>asd</Grid>
                                    <Grid xs={2}>asd</Grid>
                                    <Grid xs={2}> <Button>Delete Item</Button> </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid xs={12}>
                            <Item>
                                <Grid container>
                                    <Grid xs={4}>asd</Grid>
                                    <Grid xs={4}>asd</Grid>
                                    <Grid xs={2}>asd</Grid>
                                    <Grid xs={2}> <Button>Delete Item</Button> </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid xs={12}>
                            <Item>
                                <Grid container>
                                    <Grid xs={4}>asd</Grid>
                                    <Grid xs={4}>asd</Grid>
                                    <Grid xs={2}>asd</Grid>
                                    <Grid xs={2}> <Button>Delete Item</Button> </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        {/* --//data-- */}
                    </Grid>
                    <Button>Clear All Item</Button>
                </Box>
            </Container>
        </React.Fragment>
    );
}