import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class TargetToAchieve extends Component {

    render() {
        if (this.props.currentStep !== 4) return null;
        return (
            <Fragment>
            <h3 className="container center-align">Wybierz cel</h3>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align" onClick={this.props.calculateCPM}>Utrata wagi</h4>
                        <input type="radio" name="targetToAchieve" value="-250" checked={this.props.targetToAchieve === '-250'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align" onClick={this.props.calculateCPM}>Utrzymanie wagi</h4>
                        <input type="radio" name="targetToAchieve" value="0" checked={this.props.targetToAchieve === '0'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align" onClick={this.props.calculateCPM}>Wzrost wagi</h4>
                        <input type="radio" name="targetToAchieve" value="250" checked={this.props.targetToAchieve === '250'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            </Fragment>
        )
    }
}

export default TargetToAchieve