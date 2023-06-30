import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv"

process.config()

const Home = () => {
    const navigate = useNavigate()
    useEffect( () => {
        console.log( process.env.RENDER_EXTERNAL_HOSTNAME )
    }, [] )

    return ( 
    <Container sx = {{
        minHeight: '100vh',
        display: 'flex',
        width: 'fit-content',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
    }}>
        <Button color="secondary" variant="outlined" sx = {{
            fontSize: '2rem',
        }}
        onClick = {() => {
            navigate('/articles')
        }}>Porucite za poneti</Button>
        <Button color="secondary" variant="outlined" sx = {{
            fontSize: '2rem'
        }}
        onClick={() => {
            navigate('/qr')
        }}>Pogledajte meni</Button>
    </Container>
        );
}
 
export default Home;