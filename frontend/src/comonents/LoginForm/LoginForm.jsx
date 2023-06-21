import './LoginForm.css'
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { Box, TextField, Grid, Paper, Button } from '@mui/material';


const LoginForm = () => {

    const { error, loading, logIn } = useLogin()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    return (
        <Grid>
            <Paper
            elevation = {4}
            sx = {{
                display: 'flex',
                flexDirection: 'column',
                padding: '4rem',
                maxWidth: 'max(40vh, 30ch)',
                alignContent: 'center',
                margin: '0 auto',
                backgroundColor: 'primary.main'
            }}>
                <TextField 
                label = "Imejl"
                color = "neutral"
                placeholder='Unesite imejl adresu'
                variant='standard'/>
                <TextField
                label = "Sifra"
                placeholder='Unesite sifru'
                variant='standard'/>
                <Button>Ulogujte se</Button>
            </Paper>
        </Grid>
    );
}

export default LoginForm;