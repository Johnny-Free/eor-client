import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalNoResults extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show11} onHide={this.props.handleCloseNoResults}>
                    <Modal.Header closeButton>
                        <Modal.Title>No Results</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please verify the information provided. If the information 
                        is correct and you wish to speak to someone please contact "Generic Insurance Carrier" 
                        at either ###-###-#### or ###-###-####.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseNoResults}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}