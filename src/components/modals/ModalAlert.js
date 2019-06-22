import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalAlert extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show13} onHide={this.props.handleCloseAlert}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.alertTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.alertBody}</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseAlert}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}