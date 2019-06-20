import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';


export default class ModalEmailAddr extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show8} onHide={this.props.handleCloseEmailAddress}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Address Required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter your email address. This is where the EOR copy will be sent.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseEmailAddress}>Close</Button>
                    </Modal.Footer>
                </Modal>               
            </div>
        )
    }
}