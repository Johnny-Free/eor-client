import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';

export default class SearchInput extends Component{
    render(){
        return(
            <div>
                <h1>Search Input</h1>
                <Form>
                    <Form.Row> 
                        <Form.Group as={Col}>
                        <Form.Label>Claim Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter the Claim Number" id='sClaim'/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Tax Id Number</Form.Label>
                        <Form.Control type="text" placeholder="Provider's Tax Id Number" id='sTaxId'/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row> 
                        <Form.Group as={Col}>
                        <Form.Label>Begining Date of Service</Form.Label>
                        <Form.Control type="date" id='sDos'/>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Total Billed Amount</Form.Label>
                        <Form.Control type="number" placeholder="Total Billed Amount" id='sBilled'/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" size="lg" block onClick={this.props.handleSearchClick} id='bSearch'>
                        Submit
                    </Button>
                    <Button variant="warning" size="md" block onClick={this.props.handleSearchResetClick}>
                        Reset
                    </Button>
                </Form>
                <hr />
            </div>
        )
    }
}