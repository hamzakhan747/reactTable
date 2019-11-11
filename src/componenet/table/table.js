import React from 'react'
import data from '../data/data.json'
import Style from './style'

const Row = ({name, company, email, phone, address}) => (
    <div className="row">
      <div>{name}</div>
      <div>{company}</div>
      <div>{email}</div>
      <div>{phone}</div>    
      <div>{address}</div>    
    </div>
  );

  class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data
      };
      this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <div className="table">
        <div className="header">
          <div onClick={() => this.sortBy('id')} >ID</div>
          <div onClick={() => this.sortBy('title')}>Title</div>
          <div onClick={() => this.sortBy('priority')}>Priority</div>
          <div onClick={() => this.sortBy('type')}>Issue Type</div>
          <div onClick={() => this.sortBy('complete')}>% Complete</div>
        </div>
        <div className="body">
          {rows}
        </div>
        <Style/>
      </div>
    );
    
  }
}

export default Table;
