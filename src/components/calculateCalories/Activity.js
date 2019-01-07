import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

 class Activity extends Component {

    render() {
        if (this.props.currentStep !== 3) return null;
        return (
            <Fragment>
            <h3 className="container center-align">Określ swoją aktywność fizyczną</h3>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align purple-text">Brak aktywności, praca siedząca</h4>
                        <input type="radio" name="activity" value="1.2" checked={this.props.activity === '1.2'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            <div className="col m6 l3">
                <label >
                    <div>
                        <h4 className="center-align purple-text">Niska ktywność, praca siedząca i treningi 1-2 w tygodniu</h4>
                        <input type="radio" name="activity" value="1.35" checked={this.props.activity === '1.35'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align purple-text">Średnia aktywność, praca siedząca i treningi 3-4 razy w tygodniu</h4>
                        <input type="radio" name="activity" value="1.55" checked={this.props.activity === '1.55'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align purple-text">Wysoka aktywność, praca fizycna i treningi 3-4 razy w tygodniu</h4>
                        <input type="radio" name="activity" value="1.75" checked={this.props.activity === '1.75'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            <div className="col m6 l3">
                <label>
                    <div>
                        <h4 className="center-align purple-text">Bardzo wysoka aktywność, codzienne treningi</h4>
                        <input type="radio" name="activity" value="2.05" checked={this.props.activity === '2.05'} onChange={this.props.handleChange}/>
                    </div>
                </label>
            </div>
            </Fragment>
        )
    }
}
export default Activity