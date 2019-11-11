import React,{Component}  from 'react';
import Style from './style'
import data from '../data/data.json'

/*
 Row component written as a simple function:
 https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components

 Any components that do not have state should be written this way,
 see: https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
 */

 
const Row = ({name, company, email, phone, address}) => (
    <div className="row">
    <div>{name}</div>
    <div>{company}</div>
    <div>{email}</div>
    <div>{phone}</div>
    <div>{address}</div>
    </div>
    );
    const arraySort = require('array-sort');
    
   
    class Table extends Component {
       Click  = (rows) => {
        arraySort(this.rows,'name');
      }
    constructor(props) {
    super(props);
    this.state = {
    data: data,
    isToggleOn: true
    };
    
    var posts=data;
    //arraySort(posts,'name');
   //arraySort(posts,'name', {reverse: true});
   this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    
    render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);
    
    return (
    <>
    <div className="table">
    <div className="header">
    <div className="fas fa-caret-down" onClick={() =>{this.Click()} }> <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button> </div>
    <div className="fas fa-caret-down" onClick={() =>{} }>company</div>
    <div className="fas fa-caret-down" onClick={() => {}}>email</div>
    <div className="fas fa-caret-down" onClick={() =>{} }>phone</div>
    <div className="fas fa-caret-down" onClick={() =>{}} >address</div>
    </div>
    <div className="body">{rows}</div>
    </div>
    <Style/>
    </>
    );
    
    }
    }
    
    /*
    * Render the above component into the div#app
    */
    export default Table;