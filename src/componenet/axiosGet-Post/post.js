import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {apiPath} from '../../config'
export default ()=>{
const[firstName,setFirstname]=useState("");
const[lastName,setLastname]=useState("");
const [phone,setPhone]=useState("");
const [email,setEmail]=useState("");
const [postbody,setPostbody]=useState("");
const [error,seterror]=useState("");

const userAuthentication=(event)=>{
event.preventDefault();
let payLoad={firstName:firstName,lastName:lastName,phone:phone,email:email,postbody:postbody};

axios.post("https://json-team-crud.herokuapp.com/api/team",payLoad).then(response=>{
    console.log("succesfull");
    window.location.replace('/get');
    
})
.catch(err => {
console.log(err)    
});
};
    return(
<>
<form onSubmit={(event)=>{userAuthentication(event)}}>
<input placeholder="firstname" type="text" value={firstName} onChange={(event)=>{
setFirstname(event.target.value)

}}></input>
<input placeholder="lastname" type="text" value={lastName} onChange={(event)=>{
setLastname(event.target.value)

}}></input>
<input placeholder="phone" type="number" value={phone} onChange={(event)=>{
setPhone(event.target.value)
}}></input>

<input placeholder="email" type="email" value={email} onChange={(event)=>{
setEmail(event.target.value)
}}></input>

<input placeholder="postbody" type="textarea" value={postbody} onChange={(event)=>{
setPostbody(event.target.value)
}}></input>

<button type="submit">Submit</button>
</form>
</>
    );
}