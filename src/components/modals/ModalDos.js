import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalDos extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show4} onHide={this.props.handleCloseDos}>
                    <Modal.Header closeButton>
                        <Modal.Title>Begining date of service</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter a begining date of service.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseDos}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}