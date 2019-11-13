import React, {useState, useEffect} from 'react';
import arraySort from 'array-sort';
// import data from '../data/data.json'
import { Table } from 'react-bootstrap'
import axios from 'axios';




export default()=>{

    const [data, setdata] = useState([]);


    useEffect(()=>{
        axios.get('https://personal-app-team.herokuapp.com/api/team').then(res=>{
            console.log("response", res.data);
            // const array=[res.data]
            // setPetOwner(res.data.data.petOwnderDetail)
            // setPetOwner(array);
            setFrontEndTeam(res.data)
        });
    },[]);


    const [frontEndTeam, setFrontEndTeam ]= useState([]);

    const [nameSortType, setNameSortType] = useState("");

    const [deleteType, setDeleteType]=useState("")

    const daleteByName = ()=>{
        if(!deleteType || deleteType==="id1"){
            setFrontEndTeam()
        }


    }


    // const sortByNames = () => {
    //     if(!nameSortType || nameSortType==="DESC"){
    //         setFrontEndTeam(arraySort(frontEndTeam, 'name'));
    //         setNameSortType("ASC")
    //     }else {
    //         setFrontEndTeam(arraySort(frontEndTeam, 'name',{reverse: true}  ));
    //         setNameSortType("DESC")
    //     }
    // };

    const sortByNames = (x) => {
        x.toString();        
        if(!nameSortType || nameSortType==="DESC"){
        setdata(arraySort(frontEndTeam, x));
        setNameSortType("ASC");
        // this.classList.toggle("fas fa-caret-up");
        }
        else
        {
        setdata(arraySort(frontEndTeam, x,{reverse: true} ));
        setNameSortType("DESC")
        // this.classList.toggle("fas fa-caret-down");
        }
       };


    return(
        <>
        {/* <button onClick={()=>sortByCompany()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button>
        <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button> */}
        <Table striped bordered hover>
        <thead>
                    <tr>
                        <th onClick={()=>sortByNames("name")}>Name</th>
                        <th onClick={()=> sortByNames("company")}>Company</th>
                        <th onClick={()=>sortByNames("email")}>email</th>
                        <th onClick={()=>sortByNames("phone")}>phone</th>
                        <th onClick={()=>sortByNames("address")}>Address</th>
                    </tr>
                </thead>
            {frontEndTeam.map(single => 
            
               
                <tbody>
                    <tr>
                        
            <td>{single.name}</td>
            <td>{single.company}</td>
            <td>{single.email}</td>
            <td>{single.phone}</td>
            <td>{single.address}</td>
            <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="DESC"?"Delete":"Delete"}</button>
            </tr>
            </tbody>

            )}
            </Table>        
   
    </> 
);

}