import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalTaxId3 extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show12} onHide={this.props.handleCloseTaxId3}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tax Id is invalid</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tax id numbers should only contain numbers.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseTaxId3}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}