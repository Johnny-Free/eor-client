import React, {Component} from 'react';
import Results from './Results';
import SearchInput from './SearchInput';
import Request from './Request';
import Header from './Header';
import ModalClaim from '../components/modals/ModalClaim';
import ModalTaxId1 from '../components/modals/ModalTaxId1';
import ModalTaxId2 from '../components/modals/ModalTaxId2';
import ModalDos from '../components/modals/ModalDos';
import ModalAmt from '../components/modals/ModalAmt';
import ModalExample from '../components/modals/ModalExample';
import ModalEmName from '../components/modals/ModalEmName';
import ModalEmailAddr from '../components/modals/ModalEmailAddr';
import ModalEmailReq from '../components/modals/ModalEmailReq';
import ModalEmailConf from '../components/modals/ModalEmailConf';
import ModalNoResults from '../components/modals/ModalNoResults';
import ModalTaxId3 from '../components/modals/ModalTaxId3';

import '../components/stylesheets/SearchContainer.css'


export default class SearchContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            flag1:true, //input
            flag2:false, //results
            flag3:false, //email
            flag4:true,//header information
            show1:false, //example modal
            show2:false, //claim number blank modal
            show3:false, //tax id number blank modal
            show4:false, //dos is blank modal
            show5:false, //billed amt blank modal
            show6:false, //tax id length <> 9 char modal
            show7:false, //requestors name blank modal
            show8:false, //email address blank modal
            show9:false, //request blank modal
            show10:false, //email confirmation modal
            show11:false, //no results modal
            show12:false, //tax id number contains characters other than numeric
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
        this.handleCloseClaim=this.handleCloseClaim.bind(this);
        this.handleOpenClaim=this.handleOpenClaim.bind(this);
        this.handleCloseTaxId1=this.handleCloseTaxId1.bind(this);
        this.handleOpenTaxId1=this.handleOpenTaxId1.bind(this);
        this.handleCloseTaxId2=this.handleCloseTaxId2.bind(this);
        this.handleOpenTaxId2=this.handleOpenTaxId2.bind(this);
        this.handleOpenDos=this.handleOpenDos.bind(this);
        this.handleCloseDos=this.handleCloseDos.bind(this);
        this.handleOpenAmt=this.handleOpenAmt.bind(this);
        this.handleCloseAmt=this.handleCloseAmt.bind(this);
        this.handleOpenRequestName=this.handleOpenRequestName.bind(this);
        this.handleCloseRequestName=this.handleCloseRequestName.bind(this);
        this.handleOpenEmailAddress=this.handleOpenEmailAddress.bind(this);
        this.handleCloseEmailAddress=this.handleCloseEmailAddress.bind(this);
        this.handleOpenEmailRequest=this.handleOpenEmailRequest.bind(this);
        this.handleCloseEmailRequest=this.handleCloseEmailRequest.bind(this);
        this.handleOpenEmailConfirmation=this.handleOpenEmailConfirmation.bind(this);
        this.handleCloseEmailConfirmation=this.handleCloseEmailConfirmation.bind(this);
        this.handleOpenNoResults=this.handleOpenNoResults.bind(this);
        this.handleCloseNoResults=this.handleCloseNoResults.bind(this);
        this.handleOpenTaxId3=this.handleOpenTaxId3.bind(this);
        this.handleCloseTaxId3=this.handleCloseTaxId3.bind(this);
    }

    //modal event handlers
    handleOpenExample(){this.setState({show1:true});} //opens the example modal
    handleCloseExample(){this.setState({show1:false});} //closes the example modal
    handleOpenClaim(){this.setState({show2:true});} //opens the claim modal
    handleCloseClaim(){this.setState({show2:false});} //closes the claim modal
    handleOpenTaxId1(){this.setState({show3:true});} //opens the claim modal
    handleCloseTaxId1(){this.setState({show3:false});} //closes the claim modal
    handleOpenTaxId2(){this.setState({show6:true});} //opens the claim modal
    handleCloseTaxId2(){this.setState({show6:false});} //closes the claim modal
    handleOpenDos(){this.setState({show4:true});} //opens the dos modal
    handleCloseDos(){this.setState({show4:false});} //closes the dos modal
    handleOpenAmt(){this.setState({show5:true});} //open the billed amt modal
    handleCloseAmt(){this.setState({show5:false})} //close the billed amt modal
    handleOpenRequestName(){this.setState({show7:true});} //open the requestors name modal
    handleCloseRequestName(){this.setState({show7:false});} //closes the requestors name modal
    handleOpenEmailAddress(){this.setState({show8:true});} //open no email addr modal
    handleCloseEmailAddress(){this.setState({show8:false});} //close no email addr modal
    handleOpenEmailRequest(){this.setState({show9:true});} //open no email body modal
    handleCloseEmailRequest(){this.setState({show9:false});} // close no email body modal
    handleOpenEmailConfirmation(){this.setState({show10:true});} // open email sent confirmation modal
    handleCloseEmailConfirmation(){this.setState({show10:false});} //close email sent confirmation modal
    handleOpenNoResults(){this.setState({show11:true});} //open no search results modal
    handleCloseNoResults(){this.setState({show11:false});} //close no search results modal
    handleOpenTaxId3(){this.setState({show12:true});} //opens tax id with non numeric char modal
    handleCloseTaxId3(){this.setState({show12:false});} //close tax id with non numeric char modal

    //event handler for input
    handleSearchClick(event){
        var isNum = /^-{0,1}\d+$/.test(document.getElementById('sTaxId').value); //checks for non-numeric in taxid
        event.preventDefault();
        if (document.getElementById('sClaim').value===''){ //if claim is blank modal will appear
            this.handleOpenClaim();
        } else if (document.getElementById('sTaxId').value===''){ //if tax id is blank modal will appear
            this.handleOpenTaxId1();
        }else if (document.getElementById('sTaxId').value.length !== 9){ //if tax id length <>9 modal will appear
            this.handleOpenTaxId2();
        }else if (!isNum){ //checks to see if the var for non-numeric is false, modal will appear
            this.handleOpenTaxId3(); 
        }else if (document.getElementById('sDos').value===''){ //if dos is blank modal will appear
            this.handleOpenDos();
        } else if (document.getElementById('sBilled').value===''){ //if billed is blank modal will appear
            this.handleOpenAmt();
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
            this.handleOpenRequestName();
        } else if (document.getElementById('rEmail').value==='') {
            this.handleOpenEmailAddress();
        } else if (document.getElementById('rBody').value==='') {
            this.handleOpenEmailRequest();
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
            this.handleOpenEmailConfirmation();
        }
    }

    render(){
        return(
            <div className='sContainer'>

                <ModalClaim //modal window for blank claim
                    handleCloseClaim={this.handleCloseClaim}
                    show2={this.state.show2}
                />

                <ModalTaxId1 //modal window for blank tax id
                    handleCloseTaxId1={this.handleCloseTaxId1}
                    show3={this.state.show3}
                />

                <ModalTaxId2 //modal window for tax id not 9 char
                    handleCloseTaxId2={this.handleCloseTaxId2}
                    show6={this.state.show6}
                />

                <ModalDos //modal window for blank dos
                    handleCloseDos={this.handleCloseDos}
                    show4={this.state.show4}
                />

                <ModalAmt  //modal window for blank billed amount
                    handleCloseAmt={this.handleCloseAmt}
                    show5={this.state.show5}
                />

                <ModalExample //modal window to show examples
                    handleCloseExample={this.handleCloseExample}
                    show1={this.state.show1}
                />

                <ModalEmName //modal window for blank requestors name
                    handleCloseRequestName={this.handleCloseRequestName}
                    show7={this.state.show7}
                />

                <ModalEmailAddr //modal window for blank email address
                    handleCloseEmailAddress={this.handleCloseEmailAddress}
                    show8={this.state.show8}
                />

                <ModalEmailReq //modal window for blank email body
                    handleCloseEmailRequest={this.handleCloseEmailRequest}
                    show9={this.state.show9}
                />

                <ModalEmailConf //modal window for email sent confirmation
                    handleCloseEmailConfirmation={this.handleCloseEmailConfirmation}
                    show10={this.state.show10}
                />

                <ModalNoResults //modal window for no results returned
                    handleCloseNoResults={this.handleCloseNoResults}
                    show11={this.state.show11}
                />

                <ModalTaxId3
                    handleCloseTaxId3={this.handleCloseTaxId3}
                    show12={this.state.show12}
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
