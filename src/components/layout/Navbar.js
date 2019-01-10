import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import bg from '../../images/office.jpg';
import { connect } from 'react-redux';
import {signOut} from '../../store/actions/authActions';

class Navbar extends Component {

    componentDidMount() {
        const elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {});
    }

    render() {
        return (
            <div>
            <span>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={bg}/>
                            </div>
                            <span className="btn btn-floating cyan darken-3">{this.props.profile.initials}</span>
                            <span className="white-text name">{this.props.profile.firstName} {this.props.profile.lastName}</span>
                            <span className="white-text email">{this.props.auth.email}</span>
                        </div>
                    </li>
                    <li className="sidenav-close"><NavLink to='/addMeal'><i className="material-icons">add_circle</i>Dodaj posiłek</NavLink></li>
                    <li className="sidenav-close"><NavLink to='/calculate'><i className="material-icons">fitness_center</i>Oblicz CPM</NavLink></li>
                    <li><div className="divider"></div></li>
                    <li className="sidenav-close"><a onClick={this.props.signOut}><i className="material-icons">exit_to_app</i>Wyloguj</a></li>
                </ul>
                <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons small">menu</i></a>
            </span>
            </div>

    )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)