import React,{useRef,Component} from 'react'
import ReactToPrint from 'react-to-print';
// export default ()=>{

//     const componentRef = useRef();
//     return (
// <>
// <table>
//         <thead>
//           <th>column 1</th>
//           <th>column 2</th>
//           <th>column 3</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//           <tr>
//             <td>data 1</td>
//             <td>data 2</td>
//             <td>data 3</td>
//           </tr>
//         </tbody>
//       </table>

//       <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//         />
//         {/* <ComponentToPrint ref={el => (this.componentRef = el)} /> */}
//         <div style={{ display: "none" }}>{ componentRef}</div>

// </>
//     );
// }

class ComponentToPrint extends React.Component {
    render() {
      return (
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
   
  class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <ComponentToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  export default Example;