import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalTaxId1 extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show3} onHide={this.props.handleCloseTaxId1}>
                    <Modal.Header closeButton>
                        <Modal.Title>A Tax Id is required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter a Tax Id number.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseTaxId1}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}