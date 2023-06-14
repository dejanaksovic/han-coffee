import './Articles.css'

import { useEffect } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from '../../hooks/useCart';

import Article from "../../comonents/Article/Article";
import { Container, Divider, Typography } from '@mui/material';
 
const Articles = () => {

    const { error, loading, getArticles } = useGetArticles()
    const { articles } = useArticleContext()

    const { addItem } = useCart()

    const fetchdata = async () => {
        await getArticles()
    }

    useEffect( () => {
        fetchdata()
    }, [] )

    return ( 
        <Container sx = {{
            marginTop: '1rem',
            display:'flex',
            flexDirection:'column',
            gap: '2rem',
        }}>
        <Typography sx = {{
            color:'white',
            fontWeight: '500',
            fontSize: 32,
        }}>
            Meni
        </Typography>
        <Divider sx = {{
            color: 'white',
        }}/>
            { articles.map ( e => (<Article key = { e._id } article={ e } func = { addItem }/>) ) }
        </Container>
     );
}
 
export default Articles;