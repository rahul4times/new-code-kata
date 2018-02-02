import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAngler } from '../actions/angler';


class MainContainer extends Component {

  componentDidMount(){
    this.props.getAngler();
  }

  render(){

    console.log("Data: ", this.props.angler);

    return(
      <div>
        I am main Container...
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    angler: state.angler
  }
}

function mapDispatchToProps(dispatch){
  return {
    getAngler: bindActionCreators(getAngler, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
