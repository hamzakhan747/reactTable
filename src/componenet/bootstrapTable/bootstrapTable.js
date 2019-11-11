import React,{Component} from 'react'
import data from '../data/data.json'
import ReactDOM from 'react-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Style from '../bootstrapTable/style'

const cellEditProp = {
    mode: 'dbclick'
  };

  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true  // enable click to select
  };


let order = 'desc';
 class SortTable extends React.Component {

  handleBtnClick = () => {
    if (order === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      order = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      order = 'desc';
    }
  }

  render() {
    return (
      <div className="col-md-12">
        
        <button onClick={ this.handleBtnClick }>Sort Product Name</button>
        <BootstrapTable ref='table' data={ data } striped hover condensed
        cellEdit={ cellEditProp } selectRow={ selectRowProp } insertRow
        >
            <TableHeaderColumn width="150" dataField='name' isKey={ true } dataSort={ true }>Name</TableHeaderColumn>
            <TableHeaderColumn width="150" dataField='company' dataSort={ true }>Company</TableHeaderColumn>
            <TableHeaderColumn width="270" dataField='email' dataSort={ true }>Email</TableHeaderColumn>
            <TableHeaderColumn width="170" dataField='phone' dataSort={ true }>Phone</TableHeaderColumn>
            <TableHeaderColumn dataField='address' dataSort={ true }>Address</TableHeaderColumn>
        </BootstrapTable>
        <Style/>
      </div>
    );
  }
}    
export default SortTable;