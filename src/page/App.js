import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import './App.css'
import BarChart from './common/BarChart'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <BarChart id='test' style={{width:500, height:500}} option={this.props.option} />
      </div>
    )
  }
}

App.propTypes = {
  option: PropTypes.object.isRequired
};
const mapStateToProps = function (state) {
  return {
    option: state.app.option
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);