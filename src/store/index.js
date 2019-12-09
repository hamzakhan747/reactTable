import React,{Component} from 'react'
const Context = React.createContext();
const reducer = (state,action)=>{
switch(action.type){
    case 'NAME':
        localStorage.setItem("name",action.payLoad);
        return{...state,name:action.payLoad}
     case 'NUMBER':
         localStorage.setItem("number",action.payLoad);
         return{...state, number:action.payLoad}  
    default:
        return state;


}

};

export class Provider extends Component{
state={
    dispatch: action => {
        this.setState(state => reducer(state, action));
    },
    
    name: localStorage.getItem("name")?localStorage.getItem("name"):"",
    number:localStorage.getItem("number")?localStorage.getItem("number"):""
};
render() {
    const { state, props: { children } } = this;
    return <Context.Provider value={ state } >{children}</Context.Provider>;
}

}
export const Consumer = Context.Consumer;