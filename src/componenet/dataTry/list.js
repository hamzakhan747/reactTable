import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import { array } from 'prop-types';
import arraySort from 'array-sort';
export default()=>{
// const [list,setlist]=useState([]);
// const [sortdata,setsortdata]=useState([""]);
// const [data,setdata]=useState([""]);

// const [data, setdata] = useState([]);
// const [frontEndTeam, setFrontEndTeam ]= useState([]);
// const [nameSortType, setNameSortType] = useState("");

//     useEffect(()=>{
//         axio.get('https://personal-app-team.herokuapp.com/api/team').then(res=>{
//         console.log("response", res.data);
//         setlist(res.data)

//         });
//   },[]);
// useEffect(()=>{
//     axios.get('https://personal-app-team.herokuapp.com/api/team').then(res=>{
//         console.log("response", res.data);
//         // const array=[res.data]
//         // setPetOwner(res.data.data.petOwnderDetail)
//         // setPetOwner(array);
//         setFrontEndTeam(res.data)
//     });
// },[]);

// const sort =(x)=>{
//     x.toString();
// if(!sortdata || sortdata==="DESC"){
// setdata(arraySort(setlist,x));
// setsortdata("ASC");
// }
// else{
//     console.log("hello world");
//     setdata(arraySort(list,x,{reverse: true}));
//     setsortdata("DESC")
// }

// }  


// const sortByNames = (x) => {
//     x.toString();        
//     if(!nameSortType || nameSortType==="DESC"){
//     setdata(arraySort(frontEndTeam, x));
//     setNameSortType("ASC");
//     // this.classList.toggle("fas fa-caret-up");
//     }
//     else
//     {
//     setdata(arraySort(frontEndTeam, x,{reverse: true} ));
//     setNameSortType("DESC")
//     // this.classList.toggle("fas fa-caret-down");
//     }
//    };


const [frontEndTeam, setFrontEndTeam ]= useState([
    {id: 1, name: "Akash"},
    {id: 2, name: "Shoaib"},
    {id: 3, name: "Hamza"},
    {id: 5, name: "Zubair"},
    {id: 6, name: "Hajira"},
    {id: 7, name: "Rida"},
]);

const [nameSortType, setNameSortType] = useState("");

const sortByNames = () => {
    if(!nameSortType || nameSortType==="DESC"){
        setFrontEndTeam(arraySort(frontEndTeam, 'name'));
        setNameSortType("ASC")
    }else {
        
        setFrontEndTeam(arraySort(frontEndTeam, 'name',{reverse: true}  ));
        setNameSortType("DESC")
    }
};

return(
<>
{/* <Table>
<thead>
    <tr>
        <th onClick={()=>sortByNames("name")}>Name</th>
    </tr>
</thead>
{
frontEndTeam.map(single=>(
    <tbody>
        <tr>
<td>{single.name}</td>
        </tr>
</tbody>
)

)

}
</Table> */}


            <button onClick={()=>sortByNames()}>{nameSortType&&nameSortType==="ASC"?"ASCENDING":"DESCENDING"}</button>
            <ul>
                {frontEndTeam.map(single => <li>{single.name}</li>)}
            </ul>
          
        





</>
);
}
