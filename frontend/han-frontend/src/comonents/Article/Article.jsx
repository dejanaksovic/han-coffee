import './Article.css'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { AddShoppingCartOutlined } from '@mui/icons-material';
import { useArticleContext } from '../../hooks/useArticles';

const Article = ({article, func}) => {

    const { URL } = useArticleContext()

    const handleClick = () => {
        func(
            article
        )
    }

    return ( 
        <Card sx = { {maxWidth: '50%', margin: '0 auto'} }>
        <CardHeader
          title = { article.name }
          subheader={article.price+'din'}
        />
        <CardMedia
          component="img"
          height="194"
          image={ `${URL}/${article.url}` }
          alt={ article.name }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {article.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick = {(e) => {
            console.log(article)
            handleClick()
          }}>
            <AddShoppingCartOutlined/>
          </IconButton>
        </CardActions>
      </Card>
     );
}
 
export default Article;