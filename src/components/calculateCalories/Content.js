import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import Gender from './Gender';
import PersonalInfo from './PersonalInfo';
import Activity from './Activity';
import Summary from './Summary';
import TargetToAchieve from './TagetToAchieve';
import { connect } from 'react-redux';
import { saveCalories } from '../../store/actions/caloriesActions';



class CaloriesWizard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentStep: 1,
            gender: '',
            age: null,
            height: null,
            weight: null,
            activity: null,
            targetToAchieve: null,
            summary: 0,
            formErrors: {
                age: '',
                height: '',
                weight: ''
              },
              formValidity: {
                age: false,
                height: false,
                weight: false
              },
            canSubmit: false
        }

        this.handleChange = this.handleChange.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    calculateCPM = () => {
        var cmp = 0;
        if(this.state.gender === 'Man') {
            cmp = (66.5 + this.state.weight * 13.75 + 5.003 * this.state.height - 6.77 * this.state.age + (this.state.targetToAchieve)) * this.state.activity;
        }
        else {
            cmp = (655.1 + this.state.weight * 9.563 + 1.89 * this.state.height - 4.676 * this.state.age + (this.state.targetToAchieve)) * this.state.activity;
        }
        this.setState({
            summary: Math.ceil(cmp)
        });

    }

    errorClass = (error) => {
        return(error.length === 0 ? '' : 'is-invalid')
      }

    validateField = (name, value) => {
        if(Object.keys(this.state.formErrors).includes(name)){
          const fieldValidationErrors = this.state.formErrors;
          const validity = this.state.formValidity;
          const isAge = name === "age";
          const isHeight = name === "height";
          const isWeight = name === "weight";
          const label = name === "age"? 'Age' : name.charAt(0).toUpperCase() + name.slice(1);

          const numericTest = "/^\d*$/";

          validity[name] = value > 0;
          fieldValidationErrors[name] = validity[name] ? '': `${label} is required and cannot be empty`;
      
          if(validity[name]) {
            if(isAge || isHeight || isWeight){
              validity[name] = numericTest.test(value);
              fieldValidationErrors[name] = validity[name] ? '': `${label}: only numbers are supported`;
            }
          }

          this.setState({
            formErrors: fieldValidationErrors,
            formValidity: validity,
          }, () => this.canSubmit())
        }
      }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 4? 5: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
      }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

    get previousButton() {
        let currentStep = this.state.currentStep
        if(currentStep !==1) {
            return (
                <button className="btn waves-effect waves-light" type="button" onClick={this._prev}>Wróć
                    <i className="material-icons right">skip_previous</i>
                </button>
            )}
        return null
    }
    
    get nextButton() {
        let currentStep = this.state.currentStep
        if(currentStep < 5) {
            return (
                <button className="btn waves-effect waves-light" type="button" onClick={this._next}>Dalej
                    <i className="material-icons right">navigate_next</i>
                </button>
          )
        }
        return null
    }

    canSubmit() {
        this.setState({
            canSubmit: this.state.formValidity.age && this.state.formValidity.height && this.state.formValidity.weight
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.saveCalories(this.state.summary);
        // this.props.history.push('/');
        // let {gender, age, height, weight, activity, summary, targetToAchieve} = this.state;
        // alert(`Your registration detail: \n
        // Wiek: ${age} \n
        // Wzrost: ${height} \n
        // Gender: ${gender} \n
        // Aktywność: ${activity} \n
        // Posumowanie: ${summary} \n
        // Cel: ${targetToAchieve} \n
        // Waga: ${weight}`
        // );
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className=" amber darken-3 full-width">
            <Fragment>

                    <Navbar />
                    <div className="container center-align">
                        <h2>Oblicz dzienną ilość kalorii</h2>
                        <form onSubmit={this.handleSubmit}>
                            <Gender
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            gender={this.state.gender}
                            />
                            <PersonalInfo
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            errorAgeClass={this.errorClass(this.state.formErrors.age)}
                            age={this.state.age}
                            errorAge={this.state.formErrors.age}
                            errorHeightClass={this.errorClass(this.state.formErrors.height)}
                            height={this.state.height}
                            errorHeight={this.state.formErrors.height}
                            errorWeightClass={this.errorClass(this.state.formErrors.weight)}
                            weight={this.state.weight}
                            errorWeight={this.state.formErrors.weight}
                            />
                            <Activity
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            activity={this.state.activity}
                            />
                            <TargetToAchieve
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            calculateCPM={this.calculateCPM}
                            activity={this.state.activity}
                            />
                            <Summary
                            currentStep={this.state.currentStep}
                            summary={this.state.summary}
                            canSubmit={this.state.canSubmit}
                            />
                            <div className="row">
                                <div className="input-field col m6 l6 s6">
                                    {this.previousButton}
                                </div>
                                <div className="input-field col m6 l6 s6">
                                    {this.nextButton}
                                </div>
                            </div>
                        </form>
                    </div>

        </Fragment>
        </div>
        )
      }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveCalories: (calories) => dispatch(saveCalories(calories))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesWizard)