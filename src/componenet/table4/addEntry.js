// import React,{useState,useEffect} from 'react'
// import axios from 'axios'
// import {userapi} from '../../config'
// export default ()=>{
// const[name,setname]=useState("");
// const [phone,setphone]=useState("");
// const [error,seterror]=useState("");
// const userAuthentication=e=>{
// e.preventDefault();
// let payLoad={name:name,phone:phone};
// axios.post(userapi + "/api/team",{header:{Autherization:`Bearer ${localStorage.getItem("token")}`}},payLoad).then(response=>{
   
//     setname("");
//     setphone("");
//     // window.location.replace("/table");
//     console.log("succesfull")
// })
// .catch(err => {
// console.log(err)
   
    
// });
// };
//     return(
// <>
// <form onSubmit={(event)=>
//       {
//           console.log("hello")
//         userAuthentication(event)
//       }
//       }>
// <input placeholder="name" type="text" value={name} onChange={(event)=>{
// setname(event.target.value)

// }}></input>
// <input placeholder="phone" type="number" value={phone} onChange={(event)=>{
// setphone(event.target.value)

// }}></input>
// <button type="submit">Submit</button>
// </form>
// </>
//     );
// }