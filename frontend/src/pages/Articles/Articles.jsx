import { useEffect, useState } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from '../../hooks/useCart';
import { getCategories } from "../../utilities/categories";

import Article from "../../comonents/Article/Article";
import { Button, Container, Divider, FormControl, MenuItem, Select, Typography, InputLabel } from '@mui/material';
import BottomAppBar from '../../comonents/BottomAppBar/BottomAppBar';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
 
const Articles = () => {

    const { getArticles } = useGetArticles()
    const { articles } = useArticleContext()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const [responsiveMargin, setResponsiveMargin] = useState()
    const [filter, setFilter] = useState("")

    const { addItem } = useCart()

    useEffect( () => {
        if( articles.values.length === 0 || articles.expires < Date.now() ) {
            getArticles()
        }
    }, [] )

    return ( 
        <Container sx = {{
            marginBottom: `${responsiveMargin ? responsiveMargin : '10'}px`,
            display:'flex',
            flexDirection:'column',
            gap: '2rem',
        }}>
        <Typography sx = {{
            color:'white',
            fontWeight: '500',
            fontSize: 32,
        }}>
            { filter ? filter : "MENI" }
        </Typography>
        { user && user.role && user.role === "ADMIN" ? 
        <Button sx = {{
            width: 'fit-content'
        }} color="secondary" variant = "contained" onClick={ e => {
            navigate('/articles/create')
        } }>Dodaj artikal</Button> : null }
        <FormControl>
            <InputLabel id = 'category' color="neutral" sx = {{
                color: 'neutral.main'
            }}>Kategorija</InputLabel>
            <Select 
                color="neutral"
                variant="outlined"
                labelId="category"
                label = "Kategorija"
                sx = {{
                minWidth: '30ch',
                maxWidth: 'fit-content',
            }} 
            style = {{
                color: 'white',
            }}
            value={filter} onChange = { e => {
                setFilter(e.target.value)
            } }>
                <MenuItem value = {""}>SVE</MenuItem>
                { getCategories().map( e => (<MenuItem key = {e} value = {e}>{e}</MenuItem>) ) }
            </Select>
        </FormControl>
        <Divider sx = {{
            color: 'white',
        }}/>
            {  articles && !filter ? articles.values.map ( e => (<Article key = { e._id } article={ e } func = { addItem }/>) ) :
                articles.values.map( e => (e.category === filter ? <Article key={ e._id } article = { e }/> : null) )
            }
        <BottomAppBar setMargin={ setResponsiveMargin }/>            
        </Container>
     );
}
 
export default Articles;