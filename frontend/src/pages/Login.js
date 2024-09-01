import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandler = (e)=>{
        console.log(e)
        setEmail(e)

    }
    const passwordHandler = (e)=>{
        console.log(e)
        setPassword(e)

    }


    return(
        <div>
            Login


            <input type="email" placeholder="kushan@gmail.com" onChange={e => emailHandler(e.target.value)} value={email}/>
            <input type="password"  onChange={e => passwordHandler(e.target.value)} value={password}/>
        </div>
    )
}

export default Login;