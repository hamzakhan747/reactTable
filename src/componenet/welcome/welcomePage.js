import React, {useEffect, useState} from "react";
export default()=>{
    useEffect(() => {
        let loggedIn = localStorage.getItem("token");
        if (!loggedIn) {
            window.location.replace('/login');
        } else {
            
        }
    }, []);
    const logout =()=>{
        localStorage.removeItem("token");
        window.location.replace('/login');
      };

return(
<>
<h1>WELCOME</h1>
<button onClick={()=>logout()}>Logout</button>
</>
);

}