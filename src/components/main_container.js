import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAngler } from '../actions/angler';


class MainContainer extends Component {

  componentDidMount(){
    this.props.getAngler();
  }

  render(){

    const blueFish = this.props.blue.map((fish, i) => {
      return(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{fish.fish.angler}</td>
          <td>{fish.weight}</td>
        </tr>
      )
    });

    const channelFish = this.props.channel.map((fish, i) => {
      return(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{fish.fish.angler}</td>
          <td>{fish.weight}</td>
        </tr>
      )
    })

    const flatheadFish = this.props.flathead.map((fish, i) => {
      return(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{fish.fish.angler}</td>
          <td>{fish.weight}</td>
        </tr>
      )
    })


    // console.log("Data here: ", this.props);

    return(
      <div>
        <h3>Blue Fish</h3>
        <table>
          <thead>
            <th>Rank</th>
            <th>Angler</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {blueFish}
          </tbody>
        </table>

        <h3>Channel Fish</h3>
        <table>
          <thead>
            <th>Rank</th>
            <th>Angler</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {channelFish}
          </tbody>
        </table>

        <h3>Flat Head Fish</h3>
        <table>
          <thead>
            <th>Rank</th>
            <th>Angler</th>
            <th>Weight</th>
          </thead>
          <tbody>
            {flatheadFish}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state, props){

  // Getting the fish weight here and also passing fish
  const fishWeight = state.angler.map(fish => {
    return { fish, weight: Math.round(fish.length * fish.girth * fish.girth / 800) };
  });


  // Sorting fish here
  const fishesInSortedForm = fishWeight.sort((a,b) => b.weight - a.weight);

  // blue
  const blue = fishesInSortedForm.filter(fish => fish.fish.species === "blue");
  const fiveBlue = blue.slice(0,5);
  // flathead
  const flatHead = fishesInSortedForm.filter(fish => fish.fish.species === "flathead");
  const fiveFlathead = flatHead.slice(0,5);

  // channel
  const channel = fishesInSortedForm.filter(fish => fish.fish.species === "channel");
  const fiveChannel = channel.slice(0,5);

  return {
    blue: fiveBlue,
    flathead: fiveFlathead,
    channel: fiveChannel
  }
}


function mapDispatchToProps(dispatch){
  return {
    getAngler: bindActionCreators(getAngler, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
