import React, { useState } from "react";
import axios from 'axios';
/* import { History } from 'react-router-dom'; */
import usersData from './server/users.json';

export const Login = (props) => {
    /* const history = History; */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const port = process.env.PORT || 5000;


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:${port}/login`, { email, password });
            console.log(response.data);
            setError('');
        } catch (error) {
            console.log(error.response.data);
            setError('Invalid username or password');
        }

        //reset the form
        setEmail('');
        setPassword('');

        const user = usersData.find((user) => user.email === email && user.password === password);
        if (user) {
            console.log("Login Successful")
            props.onLoginSuccess();
        } else {
            alert('Invalid username or password');
        }

    };



    return (
        <div className="container" >
            <h2> LOGIN</h2>
            {error && <div>{error}</div>}
            <form className="login-page" onSubmit={handleLogin}>
                <div >
                    <label htmlFor="email"> Email: &nbsp; </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" name="email" id="email" />
                </div>
                <div >
                    <label htmlFor="password"> Password: &nbsp; </label>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="password" id="password" />
                </div>
                <button type="submit" > Login</button>
            </form>
            <button onClick={() => props.onFormSwitch("signup")}> Haven't been registered? SIGN UP HERE</button>

        </div>
    )
}

export default Login