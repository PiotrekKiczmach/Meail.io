import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import user from '../../images/yuna.jpg';
import bg from '../../images/office.jpg';

class Navbar extends Component {

    componentDidMount() {
        const elem = document.querySelector(".sidenav");
        const instances = M.Sidenav.init(elem, {});
    }

    render() {
        return (
            <div>
            <span>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={bg} alt=""/>
                            </div>
                            <a href="#user"><img className="circle" src={user} alt=""/></a>
                            <a href="#name"><span className="white-text name">John Kovalski</span></a>
                            <a href="#email"><span className="white-text email">j.koval@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div className="divider"></div></li>
                    <li><p className="subheader">Subheader</p></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#!" data-target="slide-out" className="sidenav-trigger" alt=""><i className="material-icons small">menu</i></a>
            </span>
            </div>

    )
    }
}

export default Navbar