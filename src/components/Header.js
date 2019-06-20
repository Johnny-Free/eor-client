import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import '../components/stylesheets/header.css'

export default class Header extends Component{
    render(){
        return(
            <div id='parentHeader'>
                <div id='header'>
                    <h1>Generic Insurance Carrier Bill Status</h1>
                    <p>
                        EORs are only kept a year from the mail date and no EORs prior to 06/20/2019 will be available. 
                        If you require a copy of an EOR that is not available please 
                        <button id='clickHere' onClick={this.props.handleEmailClick}> click here.</button>
                    </p>
                    <Button variant='primary' onClick={this.props.handleOpenExample}>View Examples</Button>
                </div>
            </div>    
        )
    }
}