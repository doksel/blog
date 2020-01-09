import React, {Component} from "react";
import {connect} from "react-redux";
import {graphql} from "react-apollo";
import {compose} from "recompose";
import  gql  from "graphql-tag";

class FirstPage extends Component {
  render(){
    const {
      login, 
      data: {loading, hi}
    }=this.props;
    console.log('PROPS',this.props);
    
    if(loading){
      return <div>Loading......</div>
    }

    return (
      <div>
        <h1>first page</h1>
        <div>Hello - {hi}</div>
      </div>
    )
  };
};

const hiQuery = gql`
  {
    hi
  }
`

const mapStateToProps = state => ({
  login: state.me.login
});

const mapDispatchToProps = {};

export default compose(
  graphql(hiQuery),
  connect(mapStateToProps, mapDispatchToProps)
  )(FirstPage);