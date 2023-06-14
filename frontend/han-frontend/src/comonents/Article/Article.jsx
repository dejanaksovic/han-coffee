import './Article.css'
import { Avatar, Box, Typography } from '@mui/material';
import { useArticleContext } from '../../hooks/useArticles';
import { NavLink } from 'react-router-dom';

const Article = ({article, func}) => {

    const { URL } = useArticleContext()

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
          </Box>
        </NavLink>
     );
}
 
export default Article;