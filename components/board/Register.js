import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Head from 'next/head';

const theme = createTheme();

export function BoardRegister({onChange, onSubmit}) {

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>메모하기</title>
            </Head>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: 'primary'
                        }}>
                        <MenuBookIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        메모하기
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={onSubmit}
                        noValidate="noValidate"
                        sx={{
                            mt: 3
                        }}>
                        <Grid container="container" spacing={2}>
                            <Grid item="item" xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="subject">subject</InputLabel>
                                    <Select
                                        required="required"
                                        id="subject"
                                        name="subject"
                                        label="과목"
                                        onChange={onChange}>
                                        <MenuItem value={'java'}>Java</MenuItem>
                                        <MenuItem value={'python'}>Python</MenuItem>
                                        <MenuItem value={'js'}>JS</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item="item" xs={12}>
                                <TextField
                                    required="required"
                                    fullWidth="fullWidth"
                                    id="title"
                                    label="제목"
                                    name="title"
                                    onChange={onChange}/>
                            </Grid>

                            <Grid item="item" xs={12}>
                                <TextField
                                    fullWidth="fullWidth"
                                    id="contents"
                                    label="내용"
                                    name="contents"
                                    multiline={true}
                                    rows={10}
                                    onChange={onChange}/>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth="fullWidth"
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2
                            }}>
                            등 록 하 기
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
