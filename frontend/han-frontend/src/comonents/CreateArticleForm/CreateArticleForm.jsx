import { useState } from "react";
import { useCreateArticle } from "../../hooks/useCreateArticle";

const CreateArticleForm = () => {

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [desc, setDesc] = useState()

    const { error, loading, createArticle } = useCreateArticle()

    return ( 
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Ime artikla</label>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" id = "name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Cena artikla</label>
                    <input onChange={(e) => {
                        setPrice(e.target.value)
                    }} type="number" id = "price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Opis</label>
                    <input onChange = { e => {
                        setDesc(e.target.value)
                    } }  type="text" id = "desc"/>
                </div>
                <button disabled = { loading } onClick={(e) => {
                    e.preventDefault()
                    createArticle(name, price, desc)
                }}>Dodaj artikal</button>
            </form>
        </div>
     );
}
 
export default CreateArticleForm;