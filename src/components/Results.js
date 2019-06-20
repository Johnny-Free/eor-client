import React, {Component} from 'react';
import './Results.css';

export default class Results extends Component{
  constructor(){
    super();
    this.state = {
      bills:[]
    }
  };
      
  // get route. will need to enter search params to the route, fires when the component is rendered "mounted"
  componentDidMount(sClaim){
    var that=this;
    var cNumber = this.props.sClaim;
    var cId = this.props.sTaxId;
    var cDos = this.props.sDos;
    var cBilled = this.props.sBilled;
    fetch(`https://eor-api-5811.herokuapp.com/api/search/${cNumber}/${cId}/${cDos}/${cBilled}`)
      .then(function(response){
        response.json()
        .then(function(data){
          that.setState({
            bills : data
          });
        })
      })
  };

  render(){
    let bills = this.state.bills;
    return(
      <div id='parentResult'>
        <div id='result'>
          <div>
            <p>Pending = In processing | Complete = Bill has finalized</p>
          </div>        
          <table id='bills'>
            <tbody>
                <tr className='result'>
                  <th>Claim Number</th>
                  <th>Billed Amount</th>
                  <th>Status</th>
                  <th>Control Number</th>
                </tr>
                {bills.map(bill => //interates over bills  to make 1 tr for each bill
                  <tr key={bill.seq} className='res'>
                    <td>{bill.claimNumber}</td>
                    <td>{bill.billedAmt}</td>
                    <td>{bill.status}</td>
                    {bill.controlNumber && <td>{bill.controlNumber} <a alt='pdf icon click for eor' target='_blank' rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/resources/pdf/${bill.controlNumber}.pdf`}><i alt='pdf icon' className="fa fa-file-pdf-o" aria-hidden="true"></i> View EOR</a></td>}
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    )
  };
};