import Basket from "../Basket/Basket";

const Article = ({name, price, desc, func}) => {

    const handleClick = (info) => {
        func(info)
    }

    return ( 
        <>
            <h3>{name}</h3>
            <h2>{price}</h2>
            <p>{desc}</p>
            <button onClick={ func }>Stavi u korpu</button>
        </>
     );
}
 
export default Article;