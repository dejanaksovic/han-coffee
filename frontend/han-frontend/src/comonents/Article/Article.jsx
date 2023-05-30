import './Article.css'

const Article = ({article, func}) => {

    const handleClick = () => {
        func(
            article
        )
    }

    return ( 
        <div className="article-container">
            <h3>{article.name}</h3>
            <h2>{article.price}</h2>
            <p>{article.desc}</p>
            {func ? <button onClick={
                handleClick
             }>Stavi u korpu</button> : 
             null}
        </div>
     );
}
 
export default Article;