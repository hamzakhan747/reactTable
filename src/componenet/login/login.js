import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
import {userAuthapiPath} from '../../config'
export default()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data,setdata]=useState([""]);
    const [error, setError] = useState("");
    const userAuthentication = e =>{
      e.preventDefault();
      let payLoad={email:email,password:password};
      axios.post(userAuthapiPath + "/api/login", payLoad)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        // console.log(response.data.token)
        setPassword("");
        setEmail("");
        window.location.replace("/get");
    })
    .catch(err => {
      if (err.message === "Request failed with status code 404") {
          setError("Invalid Password");
      }
      else if (err.message === "Request failed with status code 500") {
          setError("Email does not exist");
      }
  });
    };
    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
    
      // function handleSubmit(event) {
      //   event.preventDefault();
      // }



  //   useEffect(()=>{
  //     let Payload={email:email,password:password};
  //       axios.post('https://json-team-crud.herokuapp.com/api/login',Payload).then(res=>{
        
  //       console.log("response", res.data);
  //       console.log(password);
        

  //       });
  // },[]);
  useEffect(() => {
    let loggedIn = localStorage.getItem("token");
    if (loggedIn) {
        window.location.replace('/get');
    }else {
        // setLoader(true)
        console.log("NAHI CHALA")
    }
}, []);


return(
<>
<div className="Login">
      <form onSubmit={(event)=>
      {
        userAuthentication(event)
      }
      }>
        <FormGroup controlId="email" bsSize="large">
          <label>Email</label>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            
          />
          
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>



</>
);


}