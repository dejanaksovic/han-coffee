import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const LoginForm = () => {

    const { error, loading, logIn } = useLogin()

    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()

    return ( 
        <div style={ { marginTop: '200px' } }>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" onChange={e => {
                        setEmail(e.target.value)
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={ e => {
                        setPassword(e.target.value)
                    } } />
                </div>

                <button disabled = { loading } onClick={ e => {
                    e.preventDefault()
                    logIn(email, password)             
                } }>Uloguj se</button>
            </form>
        </div>
     );
}
 
export default LoginForm;