import React,{Component,useState,useEffect} from 'react';
import Style from './style'
// import data from '../../Data/data.json';
import arraySort from 'array-sort';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default()=>
{
const Row = ({name, company, email, phone, address,id}) => (
<div className="row">
<div>{name}</div>
<div>{company}</div>
<div>{email}</div>
<div>{phone}</div>
<div>{address}</div>
<div>{<button className="del-btn" onClick={() => {del(id)}}>Del item</button>}
{<Link to={"/update"}><button className="del-btn" onClick={() => {}}>Update item</button></Link>}</div>
</div>
);

const [dataa, setdata]= useState([]);
const [data1, setRow]= useState([]);
const [nameSortType, setNameSortType] = useState("");

useEffect(()=>{
axios.get
('https://personal-app-team.herokuapp.com/api/team')
.then(res=>{
console.log("response", res.data);
// console.log("response", res.data);
setdata(res.data);
// setRow(res.data.data);
});
},[]);



const Ascendingsort = (x) => {
x.toString();
if(!nameSortType || nameSortType==="DESC"){
setdata(arraySort(dataa, x));
setNameSortType("ASC");
// this.classList.toggle("fas fa-caret-up");
}
else
{
setdata(arraySort(dataa, x,{reverse: true} ));
setNameSortType("DESC")
// this.classList.toggle("fas fa-caret-down");
}
};
const del=(id)=>
{
const index=id;
console.log(index);
if (index >= 0)
{
setRow(dataa.splice(index, 1));
}

// setRow(delete(dataa[id].name));
// setRow(delete(dataa[id].company));
// setRow(delete(dataa[id].email));
// setRow(delete(dataa[id].phone));
// setRow(delete(dataa[id].address));
};



const rows = dataa.map( (rowData) => <Row {...rowData} />);
return (
<>
<div className="table">
<div style={{marginLeft:'-42px'}} className="header">
<div className="" onClick={()=> Ascendingsort("name")}>
{nameSortType&&nameSortType==="ASC"?
<div className="fas fa-caret-up">NAME</div>:
<div className="fas fa-caret-down">NAME</div>}
</div>
<div onClick={()=> Ascendingsort("company")}>{nameSortType&&nameSortType==="ASC"?
<div className="fas fa-caret-up">COMPANY</div>:
<div className="fas fa-caret-down">COMPANY</div>}
</div>
<div onClick={()=> Ascendingsort("email")}>{nameSortType&&nameSortType==="ASC"?
<div className="fas fa-caret-up">EMAIL</div>:
<div className="fas fa-caret-down">EMAIL</div>}
</div>
<div onClick={()=> Ascendingsort("phone")}>{nameSortType&&nameSortType==="ASC"?
<div className="fas fa-caret-up">PHONE:</div>:
<div className="fas fa-caret-down">PHONE:</div>}
</div>
<div onClick={()=> Ascendingsort("address")}>{nameSortType&&nameSortType==="ASC"?
<div className="fas fa-caret-up">ADDR</div>:
<div className="fas fa-caret-down">ADDR</div>}
</div>

<div>

<div>
<Link to={"/add"}><button className="add-btn" onClick={() => {}}>Add item</button></Link>
</div>

</div>


</div>
<div className="body">
{rows}

</div>
</div>
<Style/>
</>
);

}