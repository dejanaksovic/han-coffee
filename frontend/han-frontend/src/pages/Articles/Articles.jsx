import './Articles.css'

import { useEffect } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from "../../hooks/useCart";

import Article from "../../comonents/Article/Article";
import { Container, IconButton } from '@mui/material';
import { Fab } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
 
const Articles = () => {

    const { error, loading, getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    const { setShown } = useCart()

    const { addItem } = useCart()

    const fetchdata = async () => {
        await getArticles()
        await console.log(articles);
    }

    useEffect( () => {
        fetchdata()
    }, [] )

    return ( 
        <Container>
            { articles.map ( e => (<Article key = { e._id } article={ e } func = { addItem }/>) ) }
            <Fab color = 'primary'
                 sx = { { position: 'sticky', bottom: '20px' } }
                 onClick={ () => { setShown( (prevState) => !prevState ) }}
                >
                <ShoppingCart />
            </Fab> 
        </Container>
     );
}
 
export default Articles;