import './LoginForm.css'
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Box, TextField, Grid, Paper, Button, Chip, Typography } from '@mui/material';
import { Login } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const LoginForm = () => {

    const { loading, logIn } = useLogin()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Grid sx = {{
            paddingTop: '2rem'
        }}>
            <Paper
            elevation = {10}
            sx = {{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                maxWidth: 'max(40vh, 30ch)',
                alignContent: 'center',
                margin: '0 auto',
                backgroundColor: 'primary.main',
                minHeight: '70vh',
            }}>
                <Chip variant='filled'
                color = 'info'
                label = "Ulogujte se"
                icon={ <Login/> }
                sx = {{
                    margin: '0 auto',
                }}/>
                <TextField 
                sx = {{
                    input: {
                        color: 'neutral.main',
                    },
                    label: {
                        color: 'neutral.main',
                    }
                }}
                label = "Imejl"
                color = "neutral"
                placeholder='Unesite imejl adresu'
                variant='filled'
                onChange = { e => {
                    setEmail(e.target.value)
                } }/>
                <TextField
                sx = {{
                    input: {
                        color: 'neutral.main',
                    },
                    label: {
                        color: 'neutral.main',
                    }
                }}
                label = "Sifra"
                color = "neutral"
                placeholder='Unesite sifru'
                variant='filled'
                type='password'
                onChange = { e => {
                    setPassword(e.target.value)
                } } />
                <span>
                    <Typography color={'secondary'} >
                        <Link
                        to={'/register'}
                        style = {{
                        fontSize: 16,
                    }} >Nemate nalog?</Link>
                    </Typography>
                    <Typography variant='body1' color={'neutral.main'}>
                        <Link style = {{
                            fontSize: 16,
                            color: '#FF9900'
                        }}> Zaboravili ste lozinku?</Link>
                    </Typography>
                </span>
                <Button variant = "contained"
                disabled = {loading}
                color = "secondary"
                sx = {{
                    maxWidth: '50%',
                    margin: '0 auto',
                    marginTop: 'auto',
                }}
                onClick = { e => {
                    logIn(email, password)
                } }
                >Ulogujte se</Button>
            </Paper>
        </Grid>
    );
}

export default LoginForm;