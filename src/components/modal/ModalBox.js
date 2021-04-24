import React, {useState} from 'react';
import {Button, Modal } from "react-bootstrap"




const ModalBox =({show, toggleModal,children}) => {
    return (
      <>
        <Button variant="primary" onClick={toggleModal}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={toggleModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>{children}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={toggleModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalBox; 
  
  