import React, {useState} from 'react';
import arraySort from 'array-sort';
import data from '../data/data.json'
import { Table } from 'react-bootstrap'

export default()=>{
    const [frontEndTeam, setFrontEndTeam ]= useState(data);

    const [nameSortType, setNameSortType] = useState("");

    const [deleteType, setDeleteType]=useState("")

    const daleteByName = ()=>{
        if(!deleteType || deleteType==="id1"){
            setFrontEndTeam()
        }


    }


    const sortByNames = () => {
        if(!nameSortType || nameSortType==="DESC"){
            setFrontEndTeam(arraySort(frontEndTeam, 'name'));
            setNameSortType("ASC")
        }else {
            setFrontEndTeam(arraySort(frontEndTeam, 'name',{reverse: true}  ));
            setNameSortType("DESC")
        }
    };

    const sortByCompany = () => {
        if(!nameSortType || nameSortType==="DESC"){
            setFrontEndTeam(arraySort(frontEndTeam, 'company'));
            setNameSortType("ASC")
        }else {
            setFrontEndTeam(arraySort(frontEndTeam, 'company',{reverse: true}  ));
            setNameSortType("DESC")
        }
    };

    return(
        <>
        {/* <button onClick={()=>sortByCompany()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button>
        <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button> */}
        <Table striped bordered hover>
        <thead>
                    <tr>
                        <th onClick={()=>sortByCompany()}>Name</th>
                        <th>Company</th>
                        <th>email</th>
                        <th>Address</th>
                        <th>Company</th>
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
            <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="DESC"?"Delete":"DESCENDING"}</button>
            </tr>
            </tbody>

            )}
            </Table>        
   
    </> 
);

}