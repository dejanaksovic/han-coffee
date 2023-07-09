// SLIKE
import koVice from "../../assets/images/ko-vice.jpeg"
import zaPoneti from "../../assets/images/za-poneti.png"
import najprodavanija from "../../assets/images/najprodavanija.png"
import groupCups from "../../assets/images/groupCups.png"

import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from "@mui/material"

const Home = () => {

    const containerStyle = {
        position: 'relative',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
    }

    const starInsideStyle = {
        position: 'absolute',
        height: '100%',
        width: '1px',
        backgroundColor: "#ffffff",
    }

    const navigate = useNavigate()

    return (
        <>
        <Container sx = {{...containerStyle}}>
            <Box sx = {{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                paddingTop: '20px',
            }}>
                <Box>
                    <Typography variant = "h1" color = "neutral.main">HANCOFFEE</Typography>
                    <Typography variant = "h2" color = "neutral.main">RAZNOLIKOST JE NASA STRAST</Typography>
                </Box>
                <Button variant = "contained"
                        sx = {{
                            backgroundColor: 'secondary.muted',
                            borderRadius: '9999px',
                            fontWeight: '400',
                            fontSize: '19px'
                        }}
                        onClick = {() => {
                            navigate('/articles')
                        }}
                        >NARUCITE ONLINE</Button>
                <Box sx = {{
                    display: 'grid',
                    position: 'relative',
                    gap: '2rem',
                    gridTemplateColumns: '1fr 1fr',
                    gridTemplateRows: '1fr 1fr',
                }}>
                    <Box sx = {{
                        backgroundImage: `url(${koVice})`,
                        aspectRatio: '1/1',
                        zIndex: '1',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        borderRadius: '0 200px 0 0',
                    }}/>
                    <Box sx = {{
                        gridColumn: '2',
                        zIndex: '1',
                        gridRow: '1 / 3',
                        backgroundImage: `url(${zaPoneti})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}/>
                    <Box sx = {{
                        zIndex: '1',
                        borderRadius: '200px 200px 0 200px',
                        backgroundColor: 'secondary.main',
                    }}/>
                    {/* DECORATION */}
                    <Box sx = {{
                        position: 'absolute',
                        borderRadius : '100%',
                        alignSelf: 'center',
                        justifySelf: 'center',
                        height: '120%',
                        width: '70%',
                        transform: 'rotate(45deg) translateY(5%)',
                        opacity: '0.2',
                        zIndex: '0',
                        border: '1px solid #FFFF'
                    }}/>
                </Box>
            </Box>
        {/* START THINGY */}
        <Box sx = {{
                    position: 'absolute',
                    right: '0',
                    bottom: '0',
                    transform: 'translate(50%, 50%)',
                    marginRight: '20px',
                    marginBottom: '20px',
                    zIndex: '10',
                    height: '10vh',
                    aspectRatio: '1/1',
                    display: 'grid',
                    placeItems: 'center',
                    opacity: '.32',
                }}>
                    <Box sx = {{
                        ...starInsideStyle
                    }}/>
                    <Box sx = {{...starInsideStyle, transform: 'rotate(60deg)'}}/>
                    <Box sx = {{...starInsideStyle, transform: 'rotate(45deg)'}}/>
                    <Box sx = {{...starInsideStyle, transform: 'rotate(90deg)'}}/>
                    <Box sx = {{...starInsideStyle, transform: 'rotate(-60deg)'}}/>
                </Box>
        </Container>
        {/* Drugi section */}
        <Container sx = {{...containerStyle, backgroundColor: 'secondary.main'}}
        >
            <Typography variant = "h1"
                        color = {'primary'}
                        sx = {{
                            marginBottom: '20px',
                        }}> 
            DOBRODOSLI U HANCOFFEE
            </Typography>
            <Typography variant = "p" color = "primary" fontSize = {20} fontFamily={'Nunito'} >
            Nalazimo se u srcu Novog Pazara, unutar kulturno istorijskog objekta Amir-aginog hana. cineci nas posebnom destinacijom
            za sve ljubitelje kafe. Kroz autentican ambijent i vrhunsku uslugu, ozivljavamo istorijski znacaj ove lokacije i duh proslih vremena     
            </Typography>
        </Container>
        <Container sx = {{
            ...containerStyle,
        }}>
            <Box sx = {{
                backgroundImage: `url(${najprodavanija})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '40px 200px 200px 200px',
                height: '300px',
                marginBottom: '40px',
            }}/>
            <Box sx = {{
                flex: '1',
            }}>
                <Typography color = "secondary" variant = "h2" sx = {{
                    paddingBottom: '20px',
                }}>NAS PONOSNI SPECIJALITET: KARAMEL MAKIJATO!</Typography>
                <Typography color = "secondary" fontSize = {16} fontFamily = {'Nunito'}>Neodoljiva kombinacija osvezavajuce mesavine kafe, mleka i karamele, savrsena poslastica za hedoniste i nasa najprodavanija kafa</Typography>
            </Box>
        </Container>
        <Container sx = {{
            ...containerStyle,
            backgroundColor: '#8f7127'
        }}>
            <Typography align = "center" variant = 'h1' color = {'#fffafa'} padding={'0 0 20px 0'}>NARUCITE ONLINE</Typography>
            <Typography align = "center" fontFamily = {'Nunito'} color = {'#fffafa'}>Uzivajte u vrhunskom ukusu nasih kafa za poneti. Narucite online i preuzmite u kafeteriji bez cekanja!</Typography>
            <Button variant = "contained" sx = {{
                marginTop: '30px',
                color: '#8f7127',
                fontFamily: 'Nunito',
                padding: '9px 0',
                textTransform: 'none',
                fontSize: '18px',
                backgroundColor: '#f0f0db'
            }}>Narucite odmah</Button>
        </Container>
        <Container sx = {{
            ...containerStyle, backgroundColor: 'primary', gap: '40px',
        }}>
            <Box>
                <Typography variant = "h2" color = "secondary.main" sx = {{
                    paddingBottom: '20px'
                }}>REVOLUCIJA KULTURE KAFE ZA PONETI</Typography>
                <Typography color = "secondary.main" fontFamily = "Nunito">
                HANCOFFEE je pokrenuo pravu revoluciju hladnih kafa za poneti u Novom Pazar. Nasa jedinstvena ponuda hladnih napitaka, osvojila je srca mnogih i postala sinonim
                za nasu kafeteriju. Nasa strast za inovacijama i kreativnost dovela je do naseg prepoznatljivog uspeha.
                </Typography>      
            </Box>
            <Box sx = {{
                backgroundImage: `url(${groupCups})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '300px',
                borderRadius: '40px 200px 200px 200px',
            }}/>
        </Container>
        </>
    );
}

export default Home;