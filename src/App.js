
import React, { useState/* , useEffect */ } from "react";

import "./App.css";
import Login from "./Login";
import Notes from "./Notes";
/* import { Map } from "./Map"; */
import { Signup } from "./SignUp";


function App() {

  const [currentLogin, setCurrentPage] = useState("login");
  const [loginSuccess, setLoginSuccess] = useState("login");

  const toggleForm = (e) => {
    setCurrentPage(e);

}

const onLoggedSuccess = (e) => {
  setLoginSuccess(e);

}


  return (
    <div className="App">
           
    <div><h2 className="heading"> LandMark Remark </h2></div>
      {
        currentLogin === "login" ? loginSuccess === "login" ? <Login onFormSwitch={toggleForm} onLoginSuccess={onLoggedSuccess}/> : <Notes /> : <Signup onFormSwitch={toggleForm}/>
      }
     
      
    </div>
    
    // <div className="App">
    //   <h1>{message}</h1>
    // </div>
  );
}

export default App