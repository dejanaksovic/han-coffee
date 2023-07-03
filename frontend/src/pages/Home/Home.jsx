import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/sampleCardImage.webp"

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
        padding: '0'
    }}>

    <Card sx = {{
        backgroundColor: 'secondary.main',
        color: 'neutral'
    }}>
        <CardMedia 
        image={image}
        title = "Pozadina"
        sx = {{
            height: '240px'
        }}
        />
        <CardContent>
            <Typography gutterBottom variant = "h3" color = "neutral.main">
                Bliže nego što mislite
            </Typography>
            <Typography variant = "body1" color = "primary.main">
                Od sada na samo par klikova od vas, uživajte u svom omiljenom piću bez čekanja. Poručite i dobijte notifikaciju kada je piće završeno
            </Typography>
        </CardContent>
        <CardActions >
            <Button
                variant="outlined"
                color = "primary"
                size="large"
                sx ={{
                margin: '0 auto'
            }}
                onClick = { () => {
                    navigate('/articles')
                } }>
                Poručite za poneti
            </Button>
        </CardActions>
    </Card>

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