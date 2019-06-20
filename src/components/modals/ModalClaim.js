import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';


export default class ModalClaim extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show2} onHide={this.props.handleCloseClaim}>
                    <Modal.Header closeButton>
                        <Modal.Title>Claim Number Required</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please enter a Claim Number.</Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseClaim}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}