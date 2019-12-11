import React from 'react'
export default ()=>{
    const currencyConvert = require('currency-convert')
    // const API_KEY = "#####################"
    currencyConvert(5, 'USD', 'HKD').then(console.log).catch(console.log)

    return(
<>

</>
    );
}