import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAngler } from '../actions/angler';


class MainContainer extends Component {

  componentDidMount(){
    this.props.getAngler();
  }

  render(){

    console.log("Data here: ", this.props);

    return(
      <div>
        I am main Container...
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

  // flathead
  const flatHead = fishesInSortedForm.filter(fish => fish.fish.species === "flathead");

  // channel
  const channel = fishesInSortedForm.filter(fish => fish.fish.species === "channel");


  return {
    blue: blue,
    flathead: flatHead,
    channel: channel
  }
}


function mapDispatchToProps(dispatch){
  return {
    getAngler: bindActionCreators(getAngler, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
