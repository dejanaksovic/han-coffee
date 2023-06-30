import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()

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