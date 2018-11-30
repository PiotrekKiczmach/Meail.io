import React, { Component } from 'react';
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
    console.log(this.state);
  }
  render() {
    return (
            <div className="container center-align">
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
                </form>
            </div>
    )
  }
}

export default SignIn