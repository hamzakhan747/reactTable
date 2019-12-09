import React,{Component} from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../src/componenet/data/data.json'
import Table from '../src/componenet/table4/table4'
import Form from '../src/componenet/form/form'
import Counter from '../src/componenet/practiceStore/store'
import About from '../src/container/about'
import List from '../src/componenet/dataTry/list'
import Login from '../src/componenet/login/login'
import Welcome from '../src/container/welcomePage/welcome'
import Validate from '../src/componenet/validation/validate'
import Axios from '../src/componenet/axios/axios'
import Storepractice from '../src/componenet/practiceStore/consumer'
import StoreValue from './componenet/storeValue/storeValue'
import Print from './componenet/printPractice/print'
import Animate from './componenet/animation/animate'
import Entry from './componenet/table4/addEntry'
import axiosgGP from './componenet/axiosGet-Post/get'
import post from './componenet/axiosGet-Post/post'


export default ()=>{
  return(
    <>


    <BrowserRouter>
            <Switch>
                <Route path={"/"} exact={true} component={Table}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/list"} component={List}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/welcome"} component={Welcome}/>
                <Route path={"/validate"} component={Validate}/>
                <Route path={"/axios"} component={Axios}/>
                <Route path={"/store"} component={Storepractice}/>
                <Route path={"/storevalue"} component={StoreValue}/>
                <Route path={"/print"} component={Print}/>
                <Route path={"/animate"} component={Animate}/>
                <Route path={"/entry"} component={Entry}/>
                <Route path={"/get"} component={axiosgGP}/>
                <Route path={"/post"} component={post}/>
                
            </Switch>
        </BrowserRouter>

 </>
  );
}


