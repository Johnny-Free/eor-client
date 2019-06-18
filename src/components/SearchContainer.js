import React, {Component} from 'react';
import Results from './Results';
import SearchInput from './SearchInput';
import Request from './Request';
import Header from './Header'
import './SearchContainer.css'

export default class SearchContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            flag1:true, //input
            flag2:false, //results
            flag3:false, //email
            flag4:true,//header information
            sClaim:'', //search claim number input
            sTaxId:'', //search tax id input
            sDos:'', //search date of service input
            sBilled:'', //search billed amount input
            rName:'', // requestor's name for email
            rEmail:'', // requestor's email address for email
            rBody:'', // requestor's email body
        }
        this.handleEmailSubmit=this.handleEmailSubmit.bind(this);
        this.handleSearchClick=this.handleSearchClick.bind(this);
        this.handleEmailClick=this.handleEmailClick.bind(this);
        this.handleSearchResetClick=this.handleSearchResetClick.bind(this);
        this.handleEmailExit=this.handleEmailExit.bind(this);
    }

    // when event handler fires it will validate that the fields are not blank
    //also validates that the tax id number is 9 characters long
    // this also sets flag 2 (result component) to true that when it renders the api will trigger
    handleSearchClick(event){
        event.preventDefault();
        if (document.getElementById('sClaim').value===''){
            alert('Please enter a Claim Number.')
        } else if (document.getElementById('sTaxId').value===''){
            alert('Please enter a Tax Id.')
        }else if (document.getElementById('sDos').value===''){
            alert('Please enter the begining date of service.')
        } else if (document.getElementById('sBilled').value===''){
            alert('Please enter the billed amount.')
        // }else if (taxidCheck !== 9){
        }else if (document.getElementById('sTaxId').value.length !== 9){
            alert('Please enter a valid Tax ID');
        } else {
            this.setState({
                sClaim:document.getElementById('sClaim').value.toUpperCase(), //if the provider uses lower case it convers to uppercase for SQL match
                sTaxId:document.getElementById('sTaxId').value,
                sDos:document.getElementById('sDos').value,
                sBilled:document.getElementById('sBilled').value,
                flag2:true, //results
            });
            document.getElementById('bSearch').disabled=true;
            console.log(this.state.sClaim.value)
        }
    }

    // when event handler is clicked it opens a form to enter a request
    handleEmailClick(event){
            this.setState({
            flag2: false, //results
            flag3:true, //email
            flag1:!this.state.flag1, //input
            flag4:false //header information
        })
    }

    //when event handler is clicked it closes the request page, allows for an escape from page back to search
    handleEmailExit(event){
        this.setState({
            flag3:false, //email,
            flag4:true, //header information
            flag1:true //input
        })
    }

    // when event handler is clicked the search fields are reset to blank
    handleSearchResetClick(){
        this.setState({
            flag1:true, //input
            flag2:false, //results
            flag3:false, //email
            sClaim:'',
            sTaxId:'',
            sDos:'',
            sBilled:'',
            rName:'',
            rEmail:'',
            rBody:'',
        })
        document.getElementById('sClaim').value='';
        document.getElementById('sTaxId').value='';
        document.getElementById('sDos').value='';
        document.getElementById('sBilled').value='';
        document.getElementById('bSearch').disabled=false;
    }

    //when event handler is clicked the email is submitted
    handleEmailSubmit(event){
        event.preventDefault();
        if(document.getElementById('rName').value===''){
            alert('Enter your name.')
        } else if (document.getElementById('rEmail').value==='') {
            alert('Enter an email address.')
        } else if (document.getElementById('rBody').value==='') {
            alert('Enter your request')
        } else {
            var data={
                rBody:document.getElementById('rBody').value,
                rName:document.getElementById('rName').value,
                rEmail:document.getElementById('rEmail').value
            }
            this.setState({
                flag3:!this.state.flag3, //email 
                flag1:!this.state.flag1, //input
                flag4:!this.state.flag4, //header information
                rName:document.getElementById('rName').value,
                rEmail:document.getElementById('rEmail').value,
                rBody:document.getElementById('rBody').value,
            });
            var url = 'http://localhost:3001/api/request';
            fetch(url, {
                method:'post',
                body: JSON.stringify(data),
                headers:{'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(response => console.log('Sucess:', JSON.stringify(response)))
            .catch(error => console.log('error:', error));
            alert('Request sent, a copy will be sent to you. Please allow 6 buisness days.');
        }
    }

    render(){
        return(
            <div>
                {this.state.flag4 && //header information
                    <Header
                        handleEmailClick={this.handleEmailClick}
                    />
                }

                {this.state.flag1 && //Search Input container
                    <SearchInput 
                        handleSearchClick={this.handleSearchClick}
                        handleSearchResetClick={this.handleSearchResetClick}
                    />
                }
                {this.state.flag2 &&  //Results container
                    <Results
                        sClaim={this.state.sClaim}
                        sTaxId={this.state.sTaxId}
                        sDos={this.state.sDos}
                        sBilled={this.state.sBilled}
                    />
                }
                {this.state.flag3 && // Email request container
                    <Request
                        handleEmailSubmit={this.handleEmailSubmit}
                        handleEmailExit={this.handleEmailExit}
                    />
                }
            </div>
        )
    }
}
