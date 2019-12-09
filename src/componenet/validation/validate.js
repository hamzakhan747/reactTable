import React, { useState } from 'react'
export default ()=>{
const [email,setEmail]=useState("");
const [validateEmail,setValidateEmail]=useState(false);
const [password,setPassword]=useState("");
const [validatePassword,setValidatePassword]=useState(false);
const onSubmitHandler=()=>{
if(!email){
    setValidateEmail(true);
}
if(!password){
    setValidatePassword(true);
}
}
return(
<>
<label>Email</label>
<input type="email" placeholder="Email" onChange={event=>{
setEmail(event.target.value);
setValidateEmail(false);
}}></input>
<p>{validateEmail ? "Email is required":""}</p>


<label>Password</label>
<input type="password" placeholder="Password" onChange={event=>{
setPassword(event.target.value);
setValidatePassword(false);
}
}></input>
<p>{validatePassword ? "Password is required":""}</p>
<button onClick={()=>{
    onSubmitHandler();
}}>Submit</button>
</>
);

}