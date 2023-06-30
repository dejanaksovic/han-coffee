import { useEffect, useState } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from '../../hooks/useCart';

import Article from "../../comonents/Article/Article";
import { Button, Container, Divider, Typography } from '@mui/material';
import BottomAppBar from '../../comonents/BottomAppBar/BottomAppBar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
 
const Articles = () => {

    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [responsiveMargin, setResponsiveMargin] = useState(0)

    const { addItem } = useCart()

    const fetchdata = async () => {
        await getArticles()
    }

    useEffect( () => {
        getArticles()
    }, [] )

    return ( 
        <Container sx = {{
            marginTop: `${responsiveMargin ? responsiveMargin + 16 : '10'}px`,
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
        { user && user.role && user.role === "ADMIN" ? 
        <Button sx = {{
            width: 'fit-content'
        }} color="secondary" variant = "contained" onClick={ e => {
            navigate('/articles/create')
        } }>Dodaj artikal</Button> : null }
        <Divider sx = {{
            color: 'white',
        }}/>
            { articles.map ( e => (<Article key = { e._id } article={ e } func = { addItem }/>) ) }
        <BottomAppBar setMargin={ setResponsiveMargin }/>            
        </Container>
     );
}
 
export default Articles;