import "./Sidenav.css"

import { ArrowRight, Instagram, Place } from "@mui/icons-material";
import { Box, Button, Divider, Stack, SwipeableDrawer, Typography, IconButton, Link, ButtonGroup, Container } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Sidenav = ({ open, toggleOpen }) => {

    const navigate = useNavigate()

    return ( 
        <>
            <SwipeableDrawer
                anchor="right"
                onClose = { () => {
                    toggleOpen()
                } }
                onOpen={() => {
                    toggleOpen()
                }}
                open = { open }
                sx={{
                    minWidth: '80vw',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      backgroundColor: 'primary.main',
                      minWidth: '80vw',
                      boxSizing: 'border-box',
                    }
                }}
            >
                <Stack >
                    <Stack sx = {{
                    backgroundColor: 'secondary.main',
                }}>
                    <IconButton sx = {{
                        marginRight: 'auto',
                        padding: 0,
                    }}
                    onClick = { () => {
                        toggleOpen()
                    } }
                    >
                        <ArrowRight sx = {{
                                width: '50px',
                                height: '50px',
                        }}
                                color="neutral"/>
                    </IconButton>
                    <Box sx = {{
                        padding: '1.25rem',
                        color: 'white'
                    }}>
                        <NavLink to={'/articles'} onClick = {() =>{
                            toggleOpen()
                        }}>
                            <Typography color={'neutral'} sx = {{
                                textDecoration:'underline',
                                fontSize: 24,
                            }}>Meni</Typography>
                        </NavLink>
                        <NavLink to = {'/'} onClick = {() => {
                            toggleOpen()
                        }}>
                            <Typography color={'neutral'} sx = {{
                                textDecoration:'underline',
                                fontSize: 24,
                            }}>Pocetna</Typography>
                        </NavLink>
                    </Box>
                    </Stack>
                    <Divider/>
                    <Stack sx = {{
                        padding: '1.25rem'
                    }}>
                        <Box display={'flex'} alignItems = {'center'}>
                        <Link sx = {{
                                color: 'white',
                                fontSize: 24,
                                fontFamily: 'Inter',
                            }} href="https://www.google.com/maps/place/Kafeterija+HANCOFFEE/@43.1408985,20.5148281,17z/data=!3m1!4b1!4m6!3m5!1s0x4756292f9b1429d7:0xed9975f6e35df388!8m2!3d43.1408946!4d20.517403!16s%2Fg%2F11k4dfyhy8?entry=ttu"
                            target="_blank">
                            <IconButton>
                                <Place color={"neutral"}/>
                            </IconButton>
                                Pronadjite nas
                            </Link>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                        <Link href = "https://www.instagram.com/hancoffee_novipazar/?ref=matcha"
                                sx = {{
                                color: 'white',
                                fontSize: 24,
                                fontFamily: 'Inter',
                            }}
                            target= '_blank'>
                            <IconButton>
                                <Instagram color={"neutral"}/>
                            </IconButton>
                                Upoznajte nas
                            </Link>
                        </Box>
                        <Divider />
                        <Container sx = {{
                            marginTop: '1rem',
                            display: 'flex',
                            gap: '1.5rem',
                        }}>
                            <Button variant = "outlined" color = "secondary"
                            onClick = { () => {
                                navigate('/login')
                                toggleOpen()
                            } }>Ulogujte se</Button>
                            <Button variant = "contained" color = "secondary" sx = {{
                                color: 'white',
                            }}
                            onClick = { () => {
                                navigate('/register')
                                toggleOpen()
                            } }>Postanite clan</Button>
                        </Container>
                    </Stack>
                </Stack>
            </SwipeableDrawer>
        </>
     );
}
 
export default Sidenav;