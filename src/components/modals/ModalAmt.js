import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalAmt extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show5} onHide={this.props.handleCloseAmt}>
                    <Modal.Header closeButton>
                        <Modal.Title>Total Billed Amount</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter the total billed amount.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseAmt}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}