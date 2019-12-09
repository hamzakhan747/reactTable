import React from 'react'
import {Consumer} from '../../store'
import Child from './index'
export default ()=>{

    return(
        <>
            <Consumer>
                {
                    ({dispatch, name,number}) => (
                        <Child dispatch={dispatch} name={name} number={number}/>
                    )
                }
            </Consumer>
        </>
    );
}