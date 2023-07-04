import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/sampleCardImage.webp"
import dzabutikaba from "../../assets/images/dzabutikaba.png"

const Home = () => {
    const navigate = useNavigate()

    return (
        <Container sx={{
            marginTop: '.5rem',
            minHeight: '100vh',
            display: 'flex',
            width: 'fit-content',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
            padding: '0'
        }}>

            <Card sx={{
                backgroundColor: 'secondary.main',
                color: 'neutral'
            }}>
                <CardMedia
                    image={image}
                    title="Pozadina"
                    sx={{
                        height: '240px'
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" color="neutral.main">
                        Bliže nego što mislite
                    </Typography>
                    <Typography variant="body1" color="primary.main">
                        Od sada na samo par klikova od vas, uživajte u svom omiljenom piću bez čekanja. Poručite i dobijte notifikaciju kada je piće završeno
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        sx={{
                            margin: '0 auto'
                        }}
                        onClick={() => {
                            navigate('/articles')
                        }}>
                        Poručite za poneti
                    </Button>
                </CardActions>
            </Card>
            <Card sx={{
                backgroundColor: 'secondary.main',
                color: 'neutral',
                
            }}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>

                    <Typography variant="h4" color="neutral.main">
                        NOVOO!
                    </Typography>
                    <Typography variant="h3" color="neutral.main">
                        DzABUTIKABA
                    </Typography>
                    <CardMedia
                        image={dzabutikaba}
                        title="Pozadina"
                        sx={{
                            height: '270px',
                            padding: '20px'
                        }}
                    />
                    <Typography variant="body1" color="primary.main">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, eget ultricies nisl n
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        sx={{
                            margin: '20px auto'
                        }}
                        onClick={() => {
                            navigate('/articles')
                        }}>
                        Pogledaj Proizvod
                    </Button>
                </CardContent>
            </Card>

        </Container>
    );
}

export default Home;