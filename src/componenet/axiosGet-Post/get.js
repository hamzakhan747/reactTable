
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {apiPath} from '../../config'

export default()=>{
    
    const [frontEndTeam,setfrontEndTeam]=useState([]);

    const logout=()=>{
        localStorage.removeItem("token");
        window.location.replace("/Login");
    }

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token){
            let header = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
        };
        axios.get("https://json-team-crud.herokuapp.com/api/team", header).then(response=>{
            console.log(response.data);
            setfrontEndTeam(response.data);
        })
    }},[])
    
    // delete
            const Delete=(id)=>{
                // let token = localStorage.getItem("token");
              
                        
                
                axios.delete(`https://json-team-crud.herokuapp.com/api/team${id}`)
                .then(res => {
                    console.log(res.data);
                      setfrontEndTeam(res.data.data)
                })
                .catch((err) => {
                    console.log(err);
                })
                setfrontEndTeam([...frontEndTeam.filter(Del=>Del.id!==id)]); 

            }


    return(
        <>
            <table>
             {   
            
               <thead>
                <tr>
            
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>postBody</th>
                   <Link to={'/post'}><button>ADD DATA</button></Link>
                   <Link><button onClick={()=>logout()}>LOGOUT</button></Link>
    
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
                    <td><button onClick={()=>Delete(single.id)}>DELETE</button></td>
                    </tr>
                </tbody>
            )}

            </table>
        
        
        </>
    );
}