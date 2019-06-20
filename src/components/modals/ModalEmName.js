import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';


export default class ModalEmName extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show7} onHide={this.props.handleCloseRequestName}>
                    <Modal.Header closeButton>
                        <Modal.Title>Requestor's Name Required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter your name.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseRequestName}>Close</Button>
                    </Modal.Footer>
                </Modal>               
            </div>
        )
    }
}