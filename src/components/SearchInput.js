import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import '../components/stylesheets/SearchInput.css'

export default class SearchInput extends Component{
    render(){
        return(
            <div id='parentInputDiv'>
                <div id='inputDiv'>
                    <hr/>
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
                        <div id='iButton'>
                            <Button variant="primary" size="lg" onClick={this.props.handleSearchClick} id='bSearch' className='iButton'>
                                Submit
                            </Button>
                            <Button variant="warning" size="lg" onClick={this.props.handleSearchResetClick} className='iButton'>
                                Reset
                            </Button>
                        </div>
                    </Form>
                    <hr />
                </div>
            </div>
        )
    }
}