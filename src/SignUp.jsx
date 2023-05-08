import React, {useState} from "react";

export const Signup = (props) => {
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const port = process.env.PORT || 5000;

const handleSignUp = (e) => {
    e.preventDefault();
    fetch(`http://localhost:${port}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,username,email, password})
    })
    .then(res => res.json())
    .then(data => console.log(data))

    //reset the form
    setName('');
    setUserName('');
    setEmail('');
    setPassword('');

}
    return (
        <div className="container">
            <h2> SIGN UP</h2>
            <form className="signup-page" onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="name"> Name: &nbsp; </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="username"> Username: &nbsp; </label>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter User Name" name="username" id="username" />
                </div>
                <div >
                    <label htmlFor="email"> Email: &nbsp; </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" name="email" id="email" />
                </div>
                <div >
                    <label htmlFor="password"> Password: &nbsp; </label>

                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" name="password" id="password" />
                </div>
                <button type="submit" > Sign up</button>
            </form>
            <button onClick={() => props.onFormSwitch("login")}> Already have an account? LOGIN HERE</button>

        </div>
    )
}

export default Signup