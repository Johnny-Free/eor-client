import React, {Component} from 'react';
import Results from './Results';
import SearchInput from './SearchInput';
import Request from './Request';
import Header from './Header';
import ModalExample from '../components/modals/ModalExample';
import ModalNoResults from '../components/modals/ModalNoResults';
import ModalAlert from '../components/modals/ModalAlert';
import '../components/stylesheets/SearchContainer.css';

export default class SearchContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            flag1:true, //input
            flag2:false, //results
            flag3:false, //email
            flag4:true,//header information
            show1:false, //example modal
            show11:false, //no results modal
            show13:false, //alert modal
            alertTitle:'', //alert title for modal
            alertBody:'', // alert body for modal
            sClaim:'', //search claim number input
            sTaxId:'', //search tax id input
            sDos:'', //search date of service input
            sBilled:'', //search billed amount input
            rName:'', // requestor's name for email
            rEmail:'', // requestor's email address for email
            rBody:'', // requestor's email body
        }
        //binding event handlers to this so they can be passed to children
        this.handleEmailSubmit=this.handleEmailSubmit.bind(this);
        this.handleSearchClick=this.handleSearchClick.bind(this);
        this.handleEmailClick=this.handleEmailClick.bind(this);
        this.handleSearchResetClick=this.handleSearchResetClick.bind(this);
        this.handleEmailExit=this.handleEmailExit.bind(this);
        this.handleCloseExample=this.handleCloseExample.bind(this);
        this.handleOpenExample=this.handleOpenExample.bind(this);
        this.handleOpenNoResults=this.handleOpenNoResults.bind(this);
        this.handleCloseNoResults=this.handleCloseNoResults.bind(this);
        this.handleOpenAlert=this.handleOpenAlert.bind(this);
        this.handleCloseAlert=this.handleCloseAlert.bind(this);
    }

    //modal event handlers
    handleOpenExample(){this.setState({show1:true});} //opens the example modal
    handleCloseExample(){this.setState({show1:false});} //closes the example modal
    handleOpenNoResults(){this.setState({show11:true});} //open no results modal
    handleCloseNoResults(){this.setState({show11:false});} //close no results modal
    handleOpenAlert(){this.setState({show13:true});}
    handleCloseAlert(){this.setState({show13:false});}

    //event handler for input
    handleSearchClick(event){
        var isNum = /^-{0,1}\d+$/.test(document.getElementById('sTaxId').value); //checks for non-numeric in taxid
        event.preventDefault();
        if (document.getElementById('sClaim').value===''){ //if claim is blank modal will appear
            this.setState({
                alertTitle:'Claim Number Required',
                alertBody:'Please enter a claim number.'
            });
            this.handleOpenAlert();
        } else if (document.getElementById('sTaxId').value===''){ //if tax id is blank modal will appear
            this.setState({
                alertTitle:'Tax Id Number Required',
                alertBody:'Please enter a tax id number'
            });
            this.handleOpenAlert();
        }else if (document.getElementById('sTaxId').value.length !== 9){ //if tax id length <>9 modal will appear
            this.setState({
                alertTitle:'Invalid Tax Id',
                alertBody:'Please enter a valid tax id number'
            });
            this.handleOpenAlert();
        }else if (!isNum){ //checks to see if the var for non-numeric is false, modal will appear
            this.setState({
                alertTitle:'Invalid Tax Id',
                alertBody:'Please enter a valid tax id number'
            });
            this.handleOpenAlert();
        }else if (document.getElementById('sDos').value===''){ //if dos is blank modal will appear
            this.setState({
                alertTitle:'Begining Date of Service is Required',
                alertBody:'Please enter the begining date of service'
            });
            this.handleOpenAlert();
        } else if (document.getElementById('sBilled').value===''){ //if billed is blank modal will appear
            this.setState({
                alertTitle:'Total Billed Amount is Required',
                alertBody:'The total billed amount is required'
            });
            this.handleOpenAlert();
        }else if (((document.getElementById('sClaim').value).substring(0,2)!=='WC') &&
            ((document.getElementById('sClaim').value).substring(0,2)!=='wc')){  //checks to see if the claim number starts with WC
            this.setState({
                sClaim:'WC'+document.getElementById('sClaim').value, //if the provider doesnt add a WC it concats one for the SQL search
                sTaxId:document.getElementById('sTaxId').value,
                sDos:document.getElementById('sDos').value,
                sBilled:document.getElementById('sBilled').value,
                flag2:true, //results component will render and will trigger the api   
            });
            document.getElementById('bSearch').disabled='true';
        }else {
            this.setState({
                sClaim:document.getElementById('sClaim').value.toUpperCase(), //if the provider uses lower case it convers to uppercase for SQL match
                sTaxId:document.getElementById('sTaxId').value,
                sDos:document.getElementById('sDos').value,
                sBilled:document.getElementById('sBilled').value,
                flag2:true, //results component will render and will trigger the api
            });
            document.getElementById('bSearch').disabled=true;
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
            this.setState({
                alertTitle:"Requestor's Name Required",
                alertBody:'Please enter your name'
            });
            this.handleOpenAlert();
        } else if (document.getElementById('rEmail').value==='') {
            this.setState({
                alertTitle:"Requestor's Email Address Required",
                alertBody:'Please enter your email address'
            });
            this.handleOpenAlert();
        } else if (document.getElementById('rBody').value==='') {
            this.setState({
                alertTitle:"Request",
                alertBody:'Please enter your request'
            });
            this.handleOpenAlert();
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

            var url =  `https://eor-api-5811.herokuapp.com/api/request`;

            fetch(url, {
                method:'post',
                body: JSON.stringify(data),
                headers:{'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(response => console.log('Sucess:', JSON.stringify(response)))
            .catch(error => console.log('error:', error));
            this.setState({
                alertTitle:'Request Sent',
                alertBody:'Your request has been sent. Please allow 6 days to process your request, thank you.'
            });
            this.handleOpenAlert();
        }
    }

    render(){
        return(
            <div className='sContainer'>

                <ModalAlert //modal for alerts
                    handleCloseAlert={this.handleCloseAlert}
                    show13={this.state.show13}
                    alertBody={this.state.alertBody}
                    alertTitle={this.state.alertTitle}
                />

                <ModalExample //modal window to show examples
                    handleCloseExample={this.handleCloseExample}
                    show1={this.state.show1}
                />

                <ModalNoResults //modal window for no results returned
                    handleCloseNoResults={this.handleCloseNoResults}
                    show11={this.state.show11}
                />


                {this.state.flag4 && //header information
                    <Header
                        handleEmailClick={this.handleEmailClick}
                        handleOpenExample={this.handleOpenExample}
                        show1={this.state.show1}
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
                        handleOpenNoResults={this.handleOpenNoResults}
                        show11={this.state.show11}
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
