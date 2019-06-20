import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'
import '../components/stylesheets/Request.css'

export default class Request extends Component{
    render(){
        return(
            <div id='parentEmail'>
                <div id='emailComponent'>
                    <h2 id='headline' className='containerBody'>Request Explanation of Review</h2>
                    <p>Request for EORs must include the Claim Number, the billing provider's tax id, 
                        the begining date of service and the total billed amount. Request missing 
                        this information will not be processed.
                    </p>
                    <Form>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Requestor's Name</Form.Label>
                                <Form.Control type="Text" placeholder="Jane Doe" id='rName'/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Requestor's Email Address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" id='rEmail'/>
                            </Form.Group>
                        </Form.Row> 
                        <Form.Group>
                            <Form.Label>Request</Form.Label>
                            <Form.Control as="textarea" rows="8" id='rBody' name='rEmail'/>
                        </Form.Group>
                        
                        <Button variant="primary" size='lg' onClick={this.props.handleEmailSubmit} className='rButton'>
                            Submit
                        </Button>
                        <Button variant="warning" size="lg" onClick={this.props.handleEmailExit} className='rButton'>
                            Cancel
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}