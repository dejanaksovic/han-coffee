import './Articles.css'

import { useEffect } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from '../../hooks/useCart';

import Article from "../../comonents/Article/Article";
import { Container, IconButton } from '@mui/material';
 
const Articles = () => {

    const { error, loading, getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    const { addItem } = useCart()

    const fetchdata = async () => {
        await getArticles()
        await console.log(articles);
    }

    useEffect( () => {
        fetchdata()
    }, [] )

    return ( 
        <Container sx = {{
            marginTop: '1rem'
        }}>
            { articles.map ( e => (<Article key = { e._id } article={ e } func = { addItem }/>) ) }
        </Container>
     );
}
 
export default Articles;