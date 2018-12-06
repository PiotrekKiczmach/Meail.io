import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import 'materialize-css/dist/css/materialize.min.css';


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
            <div className="container center-align">
                <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Zarejestruj się</h5>
                <div className= "row">
                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email' onChange={this.handleChange} />
                    </div>
                </div>
                <div className= "row">
                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="password">Hasło</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                </div>
                <div className= "row">
                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="firstName">Imię</label>
                        <input type="text" id='firstName' onChange={this.handleChange} />
                    </div>
                </div>
                <div className= "row">
                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="lastName">Nazwisko</label>
                        <input type="text" id='lastName' onChange={this.handleChange} />
                    </div>
                </div>
                <div className="input-field">
                    <button className="waves-effect waves-light btn orange lighten-1 z-depth-0">
                        Rejestruj
                        <i className="material-icons right">send</i>
                    </button>
                </div>
                <div className="center red-text">
                { authError ? <p>{authError}</p> : null }
                </div>
                </form>
            </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (creds) => dispatch(signUp(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)