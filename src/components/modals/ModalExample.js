import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class ModalExample extends Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show1} onHide={this.props.handleCloseExample}>
                    <Modal.Header closeButton>
                        <Modal.Title>Examples</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Example 1 Claim Number: WC11111 Tax Id: 123456789 Dos: 01/12/2019 Billed: 100.00<br/>
                        *Example 2 Claim Number: WC12345 Tax Id: 123789456 Dos: 02/17/2018 Billed: 650.00<br/>
                        Example 3 Claim Number: WC887554 Tax Id: 654987321 Dos: 01/01/2001 Billed: 450.00<br/>
                        * Indicates inputs that will have multiple results ie recon
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.props.handleCloseExample}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}