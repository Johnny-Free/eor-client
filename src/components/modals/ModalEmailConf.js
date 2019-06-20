import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';


export default class ModalEmailConf extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show10} onHide={this.props.handleCloseEmailConfirmation}>
                    <Modal.Header closeButton>
                        <Modal.Title>Request Sent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your request has been sent. Please allow 6 days to process your request, thank you.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseEmailConfirmation}>Close</Button>
                    </Modal.Footer>
                </Modal>               
            </div>
        )
    }
}