import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


export default function ModelOpen({setShowModal,showModal,subMitFunction}) {
    const [inputdatahere, setinputdatahere] = useState('')

  

  return (
    <div>
            <Modal
               show={showModal}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                
              
                <Modal.Body className='model_bg'> 
                <h3>Sponser</h3>
                <p>Please Enter Sponser Id here</p>
                        <input type="text"  onChange={(e)=>setinputdatahere(e.target.value)} value={inputdatahere} className="form-control"  />
                        <button onClick={()=>subMitFunction(inputdatahere)} className=" btn modelbtnhere mt-4" >Submit</button>

                    {/* <input type="text" className="ms-1" onChange={(e)=>setinputdatahere(e.target.value)} />
                    <button className="btn btn-success ms-3"  onClick={props.onHide}>Sponser</button> */}
                   
                </Modal.Body>
              {/* / */}
            </Modal>
      

    </div>
  )
}
