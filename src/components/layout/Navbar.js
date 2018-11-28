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
                <ul id="slide-out" class="sidenav">
                    <li>
                        <div class="user-view">
                            <div class="background">
                                <img src={bg} alt=""/>
                            </div>
                            <a href="#user"><img class="circle" src={user} alt=""/></a>
                            <a href="#name"><span class="white-text name">John Kovalski</span></a>
                            <a href="#email"><span class="white-text email">j.koval@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><p class="subheader">Subheader</p></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
                <a href="#!" data-target="slide-out" class="sidenav-trigger" alt=""><i class="material-icons small">menu</i></a>
            </span>
            </div>

    )
    }
}

export default Navbar