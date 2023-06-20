import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useArticleContext } from "../../hooks/useArticles";
import BottomAppBar from "../../comonents/BottomAppBar/BottomAppBar";
import { Typography, Container, Avatar, Button, Box } from "@mui/material"
import { useCart } from "../../hooks/useCart";

const ArticlePage = () => {

    const { id } = useParams() 
    const { addItem } = useCart()
    const { articles, URL } = useArticleContext()
    const [article, setArticle] = useState(null)

    useEffect( () => {
        setArticle( articles.find( e => 
            e._id === id
        ) )
        
    }, [] )

    return ( 
        <Container>
            { article &&
            <>
            <Avatar src={`${URL}/${article.url}`} sx = {{
                minWidth: '90vw',
                minHeight: '90vw',
            }}>
            </Avatar>
                <Typography fontSize={24} color={'neutral.main'} align="center">{article.name}</Typography>
                <Typography color = 'neutral.main' align = 'center' fontSize={20} >{article.desc}</Typography>
                <Button variant="outlined" color = 'secondary' sx = {{
                    display:'block',
                    margin: '0 auto',
                }}
                onClick = { () => {
                    addItem(article)
                } }>Stavi u korpu</Button>
            <BottomAppBar/>
            </>
            }
        </Container>
     );
}
 
export default ArticlePage;