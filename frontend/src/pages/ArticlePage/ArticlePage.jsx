import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useArticleContext } from "../../hooks/useArticles";
import BottomAppBar from "../../comonents/BottomAppBar/BottomAppBar";
import { Typography, Container, Avatar, Button, Box, Grid, IconButton } from "@mui/material"
import { useCart } from "../../hooks/useCart";
import { Add, ArrowBackIos, PlusOne, Remove } from "@mui/icons-material";

const ArticlePage = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const { addItem } = useCart()
    const { articles, URL } = useArticleContext()
    const [article, setArticle] = useState(null)
    const [ quantity, setQuantity ] = useState(1)

    useEffect( () => {
        setArticle( articles.find( e => 
            e._id === id
        ) )
        
    }, [] )

    return ( 
        <Grid sx = {{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
        }}>
            <Box sx = {{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 1rem',
            }}>
                <Typography color={'neutral.main'} variant="h1">
                    { article && article.name }
                </Typography>
                <IconButton onClick = { e => {
                    navigate('/articles')
                } }>
                    <ArrowBackIos color="neutral"/>
                </IconButton>
            </Box>
            <Box sx = {{
                display: 'grid',
                justifyItems: 'center',
                position: 'relative',
            }}>
                <img src={ article && `${URL}/${article.url}`} alt="" />
                <Box sx ={{
                    position: 'absolute',
                    bottom: '-10%',
                    padding: '1rem 2rem',
                }}>
                    <div style={{
                        position: 'absolute',
                        inset: '0',
                        background: 'rgba(0, 0, 0)',
                        borderRadius: '.3rem',
                    }}>
                    </div>
                    <Typography color={'secondary.main'} sx = {{
                        position: 'relative',
                        zIndex: '10',
                    }}>{ article && article.name }</Typography>
                </Box>
            </Box>
            <Box sx = {{
                marginTop: '4rem',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '.5rem',
            }}>
                <div style={{
                    borderRadius: '0 100vmax 100vmax 0',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0), 80%, rgba(255, 255, 255))',
                }}>
                    <IconButton onClick = { e => {
                        quantity > 1 ? setQuantity(quantity-1) : null
                    } }>
                        <Remove color="neutral" sx = {{
                            minHeight: '40px',
                            minWidth: '40px',
                        }}/>
                    </IconButton>
                </div>
                <Box>
                    <Typography color="neutral.main" align="center"> { quantity } </Typography>
                    <Typography color="neutral.main" align="center"> {article && quantity * article.price}din </Typography>
                </Box>
                <div style={{
                    borderRadius: '100vmax 0 0 100vmax',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 1), 20%, rgba(255, 255, 255, 0))',
                }}>
                    <IconButton onClick = { e => {
                        setQuantity(quantity + 1)
                     } }>
                        <Add color="neutral" sx = {{
                                minHeight: '40px',
                                minWidth: '40px'
                                }}/>
                    </IconButton>
                </div>
            </Box>
            <Box>
                <Button variant = "contained" color = "secondary"
                sx = {{
                    display: 'block',
                    margin: '0 auto',
                }}
                onClick = { e => {
                    addItem(article, quantity)
                } }>
                    Dodaj u korpu
                </Button>
            </Box>
            <BottomAppBar />
        </Grid>
     );
}
 
export default ArticlePage;