import React, {Component} from "react";
import {connect} from "react-redux";

class FirstPage extends Component {
  render(){
    const {login}=this.props;
    console.log('PROPS',this.props);
    
    return (
      <div>
        <div>first page</div>
        <div>Hello </div>
      </div>
    )
  };
};

const mapStateToProps = state => ({
  login: state.me.login
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);