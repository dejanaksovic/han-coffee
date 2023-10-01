import { ArrowRight, Google, Instagram, Place } from "@mui/icons-material";
import { Box, Button, Divider, Stack, SwipeableDrawer, Typography, IconButton, Link, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getGoogleURL } from "../../utilities/getGoogleUrl";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useEffect } from "react";

const Sidenav = ({ open, toggleOpen }) => {
    const { user, logout } = useAuthContext()
    
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
                    alignContent: 'center',
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                      backgroundColor: 'primary.main',
                      alignContent: 'center',
                      minWidth: '80vw',
                      boxSizing: 'border-box',
                    }
                }}
            >
            <Stack sx = {{
                    minHeight: '100%',
                }}>
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
                            <Typography color={'neutral'} fontSize={56} sx = {{
                                textDecoration:'underline',
                            }}>Poručite</Typography>
                        </NavLink>
                        <NavLink to = {'/'} onClick = {() => {
                            toggleOpen()
                        }}>
                            <Typography color={'neutral'}
                            fontSize={56}
                            sx = {{
                                textDecoration:'underline',
                            }}>Početna</Typography>
                        </NavLink>
                        { user && user.role === "USER" ?
                        <NavLink to={'/orders'} onClick={ () => {
                            toggleOpen()
                        } }>
                        <Typography color={'neutral'}
                            fontSize={56}
                            sx = {{
                                textDecoration:'underline',
                        }}>Vaše porudžbine</Typography>
                        </NavLink> : null }
                    </Box>
                    </Stack>
                    <Divider/>
                        <Container sx = {{
                                marginTop: '1rem',
                                display: 'flex',
                                gap: '1.5rem',
                            }}>
                            { !user || !user.email ? <a href={getGoogleURL()}>                          
                                <Button color = "secondary" variant = "outlined">
                                 <IconButton color = 'neutral'>
                                    <Google sx = {{fontSize: '2.3rem'}} color = 'secondary'/>
                                 </IconButton>
                                 <Typography variant = "body1" color = "neutral.main">Ulogujte se</Typography>
                                </Button>
                                </a> :
                                <Button variant="contained" color="secondary" 
                                onClick={logout}>
                                    Odjavite se
                                </Button>
                            }
                            </Container>
                    <Stack sx = {{
                        padding: '1.25rem',
                        marginTop: 'auto',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                        <Box display={'flex'} alignItems = {'center'}>
                        <Link sx = {{
                                color: 'white',
                                fontSize: 12,
                                fontFamily: 'Inter',
                            }} href="https://www.google.com/maps/place/Kafeterija+HANCOFFEE/@43.1408985,20.5148281,17z/data=!3m1!4b1!4m6!3m5!1s0x4756292f9b1429d7:0xed9975f6e35df388!8m2!3d43.1408946!4d20.517403!16s%2Fg%2F11k4dfyhy8?entry=ttu"
                            target="_blank">
                            <IconButton>
                                <Place color={"neutral"}/>
                            </IconButton>
                                Pronađite nas
                            </Link>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                        <Link href = "https://www.instagram.com/hancoffee_novipazar/?ref=matcha"
                                sx = {{
                                color: 'white',
                                fontSize: 12,
                                fontFamily: 'Inter',
                            }}
                            target= '_blank'>
                            <IconButton>
                                <Instagram color={"neutral"}/>
                            </IconButton>
                                Upoznajte nas
                            </Link>
                        </Box>
                    </Stack>
                </Stack>
            </SwipeableDrawer>
        </>
     );
}
 
export default Sidenav;