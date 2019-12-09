import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
export default ()=>{


    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://personal-app-team.herokuapp.com/api/team').then(response=>{
        console.log("data",response.data);
        setData(response.data);

        });


    },[]);

    return(
        <>

<Table>
<thead>
    <tr>
    <th>Name</th>
    <th>Company</th>
    <th>Phone</th>
    <th>Address</th>
    <th>Email</th>
    </tr>
</thead>
{data.map(zubair=>
    
    <tbody>
<tr>
<td>{zubair.name}</td>
<td>{zubair.company}</td>
<td>{zubair.phone}</td>
<td>{zubair.address}</td>
<td>{zubair.email}</td>
</tr>

    </tbody>
    
    
    )}







</Table>


        </>
    );
}