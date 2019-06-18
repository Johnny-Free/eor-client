import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap'

export default class Request extends Component{
    render(){
        return(
            <div id='emailComponent'>
                <h2 id='headline' className='containerBody'>Request Explanation of Review</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Requestor's Name</Form.Label>
                        <Form.Control type="Text" placeholder="Jane Doe" id='rName'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Requestor's Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" id='rEmail'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Request</Form.Label>
                        <Form.Control as="textarea" rows="9" id='rBody' name='rEmail'/>
                    </Form.Group>
                    
                    {/* <Button variant="primary" type="submit" onClick={this.state.handleEmailSubmit}> */}
                    <Button variant="primary" block onClick={this.props.handleEmailSubmit}>
                        Submit
                    </Button>
                    <Button variant="warning" size="md" block onClick={this.props.handleEmailExit}>
                        Cancel
                    </Button>
                </Form>
            </div>
        )
    }
}