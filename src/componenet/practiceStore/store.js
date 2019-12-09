import React from 'react';

export default(props)=>{
    let {dispatch,name,number} = props;
    const setGlobalName = (value) => {
        dispatch({
            type: "NAME",
            payLoad: value
        })
    }
    return(
<>
<label>Save in store</label>
<input type="text" value={name} onChange={(event)=>{
setGlobalName(event.target.value);
}}></input>
<h1>{number}</h1>
<button onClick={()=>{
    dispatch({
        type:"NUMBER",
        payLoad:Math.floor(Math.random() * 100)
    });

}}>Click Here</button>
</>
    );
}