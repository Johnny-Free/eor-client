import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalTaxId2 extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show6} onHide={this.props.handleCloseTaxId2}>
                    <Modal.Header closeButton>
                        <Modal.Title>A valid Tax Id is required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter a valid Tax Id number.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseTaxId2}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}