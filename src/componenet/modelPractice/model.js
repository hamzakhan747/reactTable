import React,{useState} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import Style from '../modelPractice/style'

export default ()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
<>
<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Form>
          <Modal.Title>Add Money</Modal.Title>
        <label className="inputDate">Date</label>
       <div>
        <Form.Control className="inputDate" type="date"
        
        >
        </Form.Control>
        <span class="open-button">
         <button type="button">📅</button>
       </span>
       </div>
        <label className="inputDate">Bill Number</label>
        <Form.Control className="inputDate" type="number"/>
        <label className="inputDate">Currency Type</label>
       <label className="inputDate">
       <input type="radio"></input>
       <span style={{marginLeft:"20px"}}>USD</span>
       </label> 
       <label className="inputDate">
       <input type="radio"></input>
       <span style={{marginLeft:"20px"}}>PKR</span>
       </label>
       <label className="inputDate">
       <input type="radio"></input>
       <span style={{marginLeft:"20px"}}>Afghani</span>
       </label>
       <label className="inputDate">Amount</label>
       <Form.Control className="inputDate" type="number"/>
       <label className="inputDate">Type</label>
       <label className="inputDate">
       <input type="radio"></input>
       <span style={{marginLeft:"20px"}}>Sent</span>
       </label> 
       <label className="inputDate">
       <input type="radio"></input>
       <span style={{marginLeft:"20px"}}>Recieved</span>
       </label> 
       <label className="inputDate">Detail</label><br/>
       <input className="inputDate inputTxtArea" type="textarea"></input>
       </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Style/>
</>
    );
}