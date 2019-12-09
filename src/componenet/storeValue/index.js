import React from 'react'
export default (props)=>{
    let {name} = props;
    let {number}=props;
return (
    <>
<h1>{number}</h1>
 <h1>{name}</h1>
    </>
);

}