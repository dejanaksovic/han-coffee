import './Article.css'
import { Avatar, Box, IconButton, Typography, Button } from '@mui/material';
import { useArticleContext } from '../../hooks/useArticles';
import { NavLink } from 'react-router-dom';
import { useDeleteArticles } from '../../hooks/useDeleteArticle';

const Article = ({article, func}) => {

    const { URL } = useArticleContext()
    const { loading, deleteArticle } = useDeleteArticles()

    const handleClick = () => {
        func(
            article
        )
    }

    return ( 
        <NavLink to = {`/articles/${article._id}`}>
          <Box sx = {{
            display: 'flex',
            justifyContent: 'left',
            gap: '1rem',
            alignItems:'center'
          }}>
            <Avatar src = {`${URL}/${article.url}`} sx = {{
              width: '20vw',
              height: '20vw',
            }}/>
            <Typography sx = {{
              color: 'white',
              fontSize: 24,
            }}>
              {article.name}
            </Typography>
            <Button variant='contained' color='error' onClick = { (e) => {
              e.preventDefault()
              e.stopPropagation()
              deleteArticle(article._id)
            } }>
              Obrisi artikal
            </Button>
          </Box>
        </NavLink>
     );
}
 
export default Article;