import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import { Redirect } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import { connect } from 'react-redux';
import { createMeal } from '../../store/actions/mealActions'

class CreateMeal extends Component {

    state = {
        mealName: '',
        calories: '',
        mealType:''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createMeal(this.state);
        //this.props.history.push('/');
        // let {mealName, calories, mealType, date, time } = this.state;
        // alert(`Your registration detail: \n
        // Rodzaj posiłku: ${mealType} \n
        // Godzina: ${time} \n
        // Data: ${date} \n
        // Kalorie: ${calories} \n
        // Nazwa posiłku: ${mealName}`
        // );
    }


    componentDidMount() {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="red lighten-1">
            <Fragment>
                <Navbar />
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    <h2 className="center-align">Podaj dane posiłku</h2>
                    <div className="input-field">
                        <label htmlFor="title">Posiłek</label>
                        <input type="text" id='mealName' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="calories">Ilość zjedzonych kalorii</label>
                        <input type="text" id='calories' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <select id="mealType" onChange={this.handleChange}>
                        <option value="" disabled selected>Wybierz rodzaj posiłku</option>
                        <option value="Breakfast">Śniadanie</option>
                        <option value="Dinner">Obiad</option>
                        <option value="Supper">Kolacja</option>
                        </select>
                        <label>Rodzaj posiłku</label>
                    </div>
                    <div className="row input-field center-align">
                        <button className="btn yellow darken-1"  >Zapisz</button>
                    </div>
                    </form>
                </div>
            </Fragment>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
        createMeal: (meal) => dispatch(createMeal(meal))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CreateMeal)