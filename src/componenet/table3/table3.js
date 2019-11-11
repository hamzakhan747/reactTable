import React from 'react'
import data from '../data/data.json'
var arraySort = require('array-sort');
 
arraySort([{foo: 'name'}, {foo: 'company'}, {foo: 'email'}, {foo: 'phone'}, {foo: 'address'}], 'foo');
<div></div>