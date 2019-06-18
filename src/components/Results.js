import React, {Component} from 'react';
// import './App.css';

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
    // var sClaim=sClaim;
    var cNumber = this.props.sClaim;
    var cId = this.props.sTaxId;
    var cDos = this.props.sDos;
    var cBilled = this.props.sBilled;
    console.log('Component has mounted')
    console.log(cNumber);
    // fetch('http://localhost:3001/api/search/' + cNumber + '/a/' + cId + '/b/' + cDos + '/c/' + cBilled)
    // fetch(`http://localhost:3001/api/search/${cNumber}/${cId}/${cDos}/${cBilled}`) // /a/${cId}/b/${cDos}/c/${cBilled}`) //working
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
      <div className='App'>
        <table id='bills'>
          <tbody>
              <tr>
                <th>Claim Number</th>
                <th>Billed Amount</th>
                <th>Status</th>
                <th>Control Number</th>
              </tr>
              {bills.map(bill => //interates over bills  to make 1 tr for each bill
                <tr key={bill.seq}>
                  <td>{bill.claimNumber}</td>
                  <td>{bill.billedAmt}</td>
                  <td>{bill.status}</td>
                  <td>{bill.controlNumber}</td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    )
  };
};