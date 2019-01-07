import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class PersonalInfo extends Component {

    render() {
        if (this.props.currentStep !== 2) return null;
        return (
            <Fragment>
                <h3 className="center-align">Podaj swoje dane</h3>
                <div className="row">
                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="age">Wiek (lata)</label>
                            <input className="purple-text" name="age" type="text" id='age' onChange={this.props.handleChange} />
                            <div className="invalid-feedback">{this.props.errorAge}</div>
                    </div>

                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="height">Wzrost (cm)</label>
                            <input className="purple-text" name="height" type="text" id='height' onChange={this.props.handleChange} />
                            <div className="invalid-feedback">{this.props.errorHeight}</div>
                    </div>
                    <div className="input-field col s12 l6 offset-l3">
                        <label htmlFor="weight">Waga (kg)</label>
                            <input className="purple-text" name="weight" type="text" id='weight' onChange={this.props.handleChange} />
                            <div className="invalid-feedback">{this.props.errorWeight}</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default PersonalInfo