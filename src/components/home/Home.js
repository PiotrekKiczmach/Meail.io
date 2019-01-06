import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { connect } from 'react-redux';



class Home extends Component {

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <Navbar />
        )
    }

}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
      auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(Home)
