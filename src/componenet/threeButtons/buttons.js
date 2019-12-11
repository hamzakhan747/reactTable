import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default()=>{
    const logout=()=>{
        localStorage.removeItem("token");
        window.location.replace("/Login");
    }
    const [table,setTable]=useState(false);
    const [frontEndTeam,setfrontEndTeam]=useState([]);
    const [showText, setShowText] = useState(false);
    const [table2,setTable2]=useState(false);
const zubair =()=>{
    setShowText(false);
    setTable2(false);
    setTable(!table);
    let token = localStorage.getItem("token");

    axios.get("https://json-team-crud.herokuapp.com/api/team",{ headers:{
        Authorization: `Bearer ${token}`
    }})
    .then(response=>{
        console.log(response.data);
        setfrontEndTeam(response.data);
    })
} 
const shoaib =()=>{
    setTable(false);
    setTable2(false);
  setShowText(!showText);
}
const hamza=()=>{
    setShowText(false);
    setTable(false);
    setTable2(!table2);
    let token = localStorage.getItem("token");

    axios.get("https://json-team-crud.herokuapp.com/api/team",{ headers:{
        Authorization: `Bearer ${token}`
    }})
    .then(response=>{
        console.log(response.data);
        setfrontEndTeam(response.data);
    })
}
    return (
        <>
        <button onClick={()=>{
            zubair();
        }}>Zubair</button>
        <button onClick={()=>{
                shoaib();
                
        }}>Shoaib</button>
        <button onClick={()=>{
                hamza();
                
        }}>Hamza</button>
{table &&
        <table>
             {   
            
               <thead>
                <tr>
            
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>postBody</th>
                   <button>ADD DATA</button>
                   <button onClick={()=>logout()}>LOGOUT</button>
    
                </tr>     
               </thead>            

            }
            {

            frontEndTeam.map(single=>
                <tbody>
                    <tr>
                    <td>{single.firstName}</td>
                    <td>{single.lastName}</td>
                    <td>{single.email}</td>
                    <td>{single.phone}</td>
                    <td>{single.postBody}</td>
                    <td><button>EDIT</button></td>
                   
                    </tr>
                </tbody>
            )}

            </table>
            }
            {showText && <p>This text will show!</p>}



            {table2 &&
        <table>
             {   
            
               <thead>
                <tr>
            
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>postBody</th>
                   <button>ADD DATA</button>
                   <button onClick={()=>logout()}>LOGOUT</button>
    
                </tr>     
               </thead>            

            }
            {

            frontEndTeam.map(single=>
                <tbody>
                    <tr>
                    <td>{single.firstName}</td>
                    <td>{single.lastName}</td>
                    <td>{single.email}</td>
                    <td>{single.phone}</td>
                    <td>{single.postBody}</td>
                    <td><button>EDIT</button></td>
                   
                    </tr>
                </tbody>
            )}

            </table>
            }
 



        </>
    );
}