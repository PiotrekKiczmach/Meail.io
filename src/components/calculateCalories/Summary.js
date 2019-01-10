import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Summary extends Component {

    render() {
        if (this.props.currentStep !== 5) return null;
        return (
            <Fragment>
            <h3 className="center-align">Twoje dzienne zapotrzebowanie na kalorie</h3>
            <h2 className="center-align">{this.props.summary} kcal</h2>
            <div className="input-field">
                <button className="waves-effect waves-light btn">
                        Zapisz
                        <i className="material-icons right">send</i>
                </button>
            </div>
            </Fragment>
        )
    }
}

export default Summary