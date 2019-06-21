import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalEmailReq extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show9} onHide={this.props.handleCloseEmailRequest}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Address Required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please enter the claim number, billing provider's tax id number, begining date of 
                        service and total billed amount for the EOR you are requesting a copy of.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseEmailRequest}>Close</Button>
                    </Modal.Footer>
                </Modal>               
            </div>
        )
    }
}