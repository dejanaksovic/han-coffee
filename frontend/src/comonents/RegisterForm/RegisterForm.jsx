import { useState } from "react";
import { useRegister } from "../../hooks/useRegister";
import Logo from "../../assets/images/han-logo-removebg-preview.png"

const RegisterForm = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()

    const { loading, register } = useRegister()

    return ( 
        <div className="form">
            <form className="formConcent" >
                <img style={{
                    width:'150px'
                }}  src={Logo} alt='Han' />
                <span className='form-group hedaer'>Uloguj se</span>
                <div className="form-group">
                    <label htmlFor="name">Ime: </label>
                    <input onChange={( e ) => {
                        setName(e.target.value)
                    }} type="text" id="name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Imejl: </label>
                        <input onChange={(e) => {
                            setEmail(e.target.value)
                        }} type="email" id="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Sifra</label>
                    <input type="password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <select onChange={ e => {
                        setRole(e.target.value)
                    } } id="role">
                        <option value="ADMIN">Administrator</option>
                        <option value="WORKER">Radnik</option>
                        <option value="USER">Korisnik</option>
                    </select>
                </div>
                <button disabled = { loading } onClick={ (e) => {
                    e.preventDefault()
                    register(name, email, password, role)
                } } >REGISTRUJ</button>
            </form>
        </div>
     );
}
 
export default RegisterForm;