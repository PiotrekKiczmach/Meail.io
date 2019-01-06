import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class Gender extends Component {

    render() {
        if (this.props.currentStep !== 1) return null;
        return (
            <Fragment>
                <h3 className="container center-align">Wybierz swoją płeć</h3>
                <div className="col m6 l3">
                    <label>
                        <div>
                            <h4 className="center-align">Mężczyzna</h4>
                            <input name="gender" type="radio" value="Man" checked={this.props.gender === 'Man'} onChange={this.props.handleChange}/>
                        </div>
                    </label>
                </div>
                <div className="col m6 l3">
                    <label>
                        <div>
                            <h4 className="center-align">Kobieta</h4>
                            <input name="gender" type="radio" value="Woman" checked={this.props.gender === 'Woman'} onChange={this.props.handleChange}/>
                        </div>
                    </label>
                </div>
            </Fragment>
        )
    }
}

export default Gender