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

                            <span className="white-text name">John Kovalski</span>
                            <span className="white-text email">j.koval@gmail.com</span>
                        </div>
                    </li>
                    <li><NavLink to='/userSettings'><i className="material-icons">settings</i>Ustawienia</NavLink></li>
                    <li><NavLink to='/calculate'><i className="material-icons">cal</i>Oblicz CPM</NavLink></li>
                    <li><div className="divider"></div></li>
                    <li><a onClick={this.props.signOut}><i className="material-icons">exit_to_app</i>Wyloguj</a></li>
                </ul>
                <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons small">menu</i></a>
            </span>
            </div>

    )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default connect(null, mapDispatchToProps)(Navbar)