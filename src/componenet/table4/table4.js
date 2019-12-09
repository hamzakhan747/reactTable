// import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router,Route,Link} from "react-router-dom"
// import arraySort from 'array-sort';
// import About from '../../container/about'
// // import data from '../data/data.json'
// import { Table } from 'react-bootstrap'
// import {userapi} from "../../config"
// import axios from 'axios';
// import {apiPath} from '../../config'



// export default()=>{


//     const logout =()=>{
//         localStorage.removeItem("token");
//         window.location.replace('/login');
//       };

//     useEffect(()=>{
//         let token = localStorage.getItem("token");
//         if(token){
//             let header = {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             };
        
//         axios.get("https://json-node-crud.herokuapp.com/api/team",header)
//         .then(res=>{
//             console.log("response", res.data);
//             // const array=[res.data]
//             // setPetOwner(res.data.data.petOwnderDetail)
//             // setPetOwner(array);
//             setFrontEndTeam(res.data);
//             console.log(frontEndTeam,"hello")
//         })
//     }
//     },[]);

//     const [data, setdata] = useState([]);
//     const [frontEndTeam, setFrontEndTeam ]= useState([]);

//     const [nameSortType, setNameSortType] = useState("");

//     const [deleteType, setDeleteType]=useState("")

//     const daleteByName = ()=>{
//         if(!deleteType || deleteType==="id1"){
//             setFrontEndTeam()
//         }
//     }

    

   
//     const deleteName = (id) => {
//         setFrontEndTeam([...frontEndTeam.filter((sin) => sin.id !== id)])
//     };
//     const sortByNames = (x) => {
//         x.toString();        
//         if(!nameSortType || nameSortType==="DESC"){
//         setdata(arraySort(frontEndTeam, x));
//         setNameSortType("ASC");
//         this.classList.toggle("fas fa-caret-up");
//         }
//         else
//         {
//         setdata(arraySort(frontEndTeam, x,{reverse: true} ));
//         setNameSortType("DESC")
//         this.classList.toggle("fas fa-caret-down");
//         }
//        };
   

//     return(
//         <>
//         <button onClick={()=>sortByCompany()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button>
//         <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button>
//         <Table striped bordered hover>
//         <thead>
//                     <tr>
//                         <th onClick={()=>sortByNames("")}>Name</th>
//                         <th onClick={()=> sortByNames("")}>Company</th>
//                         <th onClick={()=>sortByNames("")}>email</th>
//                         <th onClick={()=>sortByNames("")}>phone</th>
//                         <th onClick={()=>sortByNames("")}>Address</th>
//                         <th><button onClick={()=>logout()}>Logout</button></th>
//                         <th><Link to={'/entry'}><button>Add</button></Link></th>
//                     </tr>
//                 </thead>
            
//             {
//             frontEndTeam.map(data => 
            
               
//                 <tbody>
                 
//             <td>{data.firstName}</td>
//             <td>{data.lastName}</td>
//             <td>{data.email}</td>
//             <td>{data.phone}</td>
//             <td>{data.postBody}</td>
            
//             <button onClick={() => deleteByName(data.id)}>delete</button>
            
//             <Link to="/about">About</Link>
            
//             {/* <Router><Route path={"/about"} ><About/></Route></Router> */}

     
//             </tbody>

//             )}
//             </Table>        
   
//     </> 
// );

// }