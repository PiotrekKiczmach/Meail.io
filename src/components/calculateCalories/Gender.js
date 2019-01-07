import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Man from '../../svg/man.svg';
import Woman from '../../svg/woman.svg';

class Gender extends Component {

    render() {
        if (this.props.currentStep !== 1) return null;
        return (
            <Fragment>
                <h3 className="center-align">Wybierz swoją płeć</h3>
                <div className="row">
                    <div className="col m6 l6 s6">
                        <label>
                            <div>
                                <h4 className="center-align purple-text">Mężczyzna</h4>
                                <img src={Man} alt='Man'/>
                                <input name="gender" type="radio" value="Man" checked={this.props.gender === 'Man'} onChange={this.props.handleChange}/>
                            </div>
                        </label>
                    </div>
                    <div className="col m6 l6 s6">
                        <label>
                            <div>
                                <h4 className="center-align purple-text">Kobieta</h4>
                                <img src={Woman} alt='Woman'/>
                                <input name="gender" type="radio" value="Woman" checked={this.props.gender === 'Woman'} onChange={this.props.handleChange}/>
                            </div>
                        </label>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Gender