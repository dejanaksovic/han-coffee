import { useState } from "react";
import { useCreateArticle } from "../../hooks/useCreateArticle";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select , TextField} from "@mui/material";
import { getCategories } from "../../utilities/categories";

const CreateArticleForm = () => {

    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [desc, setDesc] = useState()
    const [category, setCategory] = useState()

    const [image, setImage] = useState()

    const { error, loading, createArticle } = useCreateArticle()

    return ( 
        <div style={ {marginTop: '100px'} } >
            <form>
            <Grid sx = {{
                maxWidth: 'max(50vw, 600px)',
                margin: '0 auto',
            }}>    
                <FormControl margin="normal" fullWidth>
                    <TextField color="neutral" label = "Ime artikla" sx = {{
                        input: {
                            color: 'neutral.main'
                        }, 
                        label: {
                            color: 'neutral.main'
                        }
                    }} onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" id = "name"/>
                </FormControl>
                <FormControl margin = "normal" fullWidth>
                    <TextField color = "neutral" label = "Cena artikla" sx = {{
                        input: {
                            color: 'neutral.main'
                        }, 
                        label: {
                            color: 'neutral.main'
                        }
                    }} onChange={(e) => {
                        setPrice(e.target.value)
                    }} type="number" id = "price"/>
                </FormControl>
                <FormControl margin = "normal" fullWidth>
                    <TextField color = "neutral" label = "Opis" sx = {{
                        input: {
                            color: 'neutral.main'
                        }, 
                        label: {
                            color: 'neutral.main'
                        }
                    }} onChange = { e => {
                        setDesc(e.target.value)
                    } }  type="text" id = "desc"/>
                </FormControl>
                <FormControl margin = "normal" fullWidth>
                    <TextField sx = {{
                        input: {
                            color: 'neutral.main'
                        }, 
                        label: {
                            color: 'neutral.main'
                        }
                    }} color = "neutral" type="file" name="image" encType = "multipart/form-data" onChange={(e) => {
                        setImage(e.target.files[0])
                        console.log(e.target.files[0])
                    } }/>
                </FormControl>
                <FormControl margin = "normal" fullWidth >
                    <InputLabel color = "neutral" id = "category" style={{
                        color: 'white'
                    }}>
                        Kategorija:
                    </InputLabel>
                    <Select
                        color="neutral"
                        variant="filled"
                        labelId="category"
                        label = "Kategorija"
                        onChange={ e => {
                            setCategory(e.target.value)
                        } }
                        style = {{
                            color: 'white'
                        }}
                    >
                        {
                            getCategories().map( e => (<MenuItem key={e} value = {e}>{e}</MenuItem>) )
                        }
                    </Select>
                </FormControl>
                <Button color="secondary" variant = "outlined" disabled = { loading }
                sx = {{
                    display: 'block',
                    margin: '0 auto',
                }}    
                onClick={(e) => {
                    e.preventDefault()
                    createArticle(name, price, desc, image, category)
                }}>Dodaj artikal</Button>
            </Grid>
            </form>
        </div>
     );
}
 
export default CreateArticleForm;