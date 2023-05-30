import Basket from "../Basket/Basket";

const Article = ({article, func}) => {

    const handleClick = () => {
        func(
            article
        )
    }

    return ( 
        <>
            <h3>{article.name}</h3>
            <h2>{article.price}</h2>
            <p>{article.desc}</p>
            {func ? <button onClick={
                handleClick
             }>Stavi u korpu</button> : 
             null}
        </>
     );
}
 
export default Article;