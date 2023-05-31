import './Articles.css'

import { useEffect } from "react";
import { useArticleContext } from "../../hooks/useArticles";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useCart } from "../../hooks/useCart";
import { Grid } from '@mui/material';

import Article from "../../comonents/Article/Article";

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
        <Grid container spacing={ 4 } >
            {articles ?
            articles.map( e => 
            <Grid item xs = {6}>
                <Article article={ e } key={e._id} func={addItem} />
            </Grid> ) :
            null}        
        </Grid>
     );
}
 
export default Articles;