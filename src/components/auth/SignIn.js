import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect, NavLink} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
            <div className="container center-align teal darken-1">
                <form className="white" onSubmit={this.handleSubmit}>
                    <div className= "row">
                        <h5 className="grey-text text-darken-3">Zaloguj się</h5>
                        <div className="input-field col s12 l6 offset-l3">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id='email' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 l6 offset-l3">
                            <label htmlFor="password">Hasło</label>
                            <input type="password" id='password' onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="input-field">
                        <button className="waves-effect waves-light btn orange lighten-1 z-depth-0">Login</button>
                    </div>
                    <div className="centered">
                      <p>Nie masz konta? Stwórz je teraz!</p>
                      <NavLink to='/signup'>
                        <button className="waves-effect waves-light btn orange lighten-1 z-depth-0">Zarejestruj się</button>
                      </NavLink>
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
    return{
      authError: state.auth.authError,
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signIn: (creds) => dispatch(signIn(creds))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignIn)