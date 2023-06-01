import { useState } from "react";
import { useCreateArticle } from "../../hooks/useCreateArticle";

const CreateArticleForm = () => {

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [desc, setDesc] = useState()

    const [image, setImage] = useState()

    const { error, loading, createArticle } = useCreateArticle()

    return ( 
        <div style={ {marginTop: '100px'} } >
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
                <div className="form-group">
                    <label htmlFor="image">Slika</label>
                    <input type="file" name="image" encType = "multipart/form-data" onChange={(e) => {
                        setImage(e.target.files[0])
                        console.log(e.target.files[0])
                    } }/>
                </div>
                <button disabled = { loading } onClick={(e) => {
                    e.preventDefault()
                    createArticle(name, price, desc, image)
                }}>Dodaj artikal</button>
            </form>
        </div>
     );
}
 
export default CreateArticleForm;