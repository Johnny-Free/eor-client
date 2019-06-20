import React, {Component} from 'react';
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div id='parentHeader'>
                <div id='header'>
                    <h1>Generic Insurance Carrier EOR Request</h1>
                    <p>
                        if you need a copy of an EOR that is older than 12 months please 
                        <button id='clickHere' onClick={this.props.handleEmailClick}> click here.</button>
                    </p>
                    <p id='exampleBox'>
                        Example 1 Claim Number: WC11111 Tax Id: 123456789 Dos: 01/12/2019 Billed: 100.00<br/>
                        Example 2 Claim Number: WC12345 Tax Id: 123789456 Dos: 02/17/2018 Billed: 650.00<br/>
                        * Example 3 Claim Number: WC887554 Tax Id: 654987321 Dos: 01/01/2001 Billed: 450.00<br/>
                        * Indicates inputs that will have multiple results ie recon
                    </p>
                </div>
            </div>    
        )
    }
}