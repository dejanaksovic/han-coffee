import './Article.css'
import { Card, CardContent, CardHeader, CardMedia, CardActionArea } from "@mui/material"
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

const Article = ({article, func}) => {

    const handleClick = () => {
        func(
            article
        )
    }

    return ( 
            <Card >
                <CardHeader 
                    title = {article.name}
                    subheader = { article.price + 'din' }/>
                <CardContent>
                <CardMedia
                    component = { "img" }
                    image={'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&webp=true&resize=300,272'}/>
                    <p>{article.desc}</p>
                </CardContent>
                <CardActionArea>
                {func ? <Button color = 'primary' variant = 'contained' onClick={
                        handleClick
                     }>Stavi u korpu</Button> :
                     null}
                </CardActionArea>
            </Card>
     );
}
 
export default Article;