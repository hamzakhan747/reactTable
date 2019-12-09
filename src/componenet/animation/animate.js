import React from 'react'
import {Tween} from 'react-gsap'
    import form from '../form/form';
export default ()=>{

   
    return(
        <>
       <Tween from={{ x: '100px', rotation: -360 }}>
    <div>This element gets tweened</div>
  </Tween>
        </>
    );
}