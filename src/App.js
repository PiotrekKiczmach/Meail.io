import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/home/Home';
import CaloriesWizard  from './components/calculateCalories/Content';

class App extends Component {

  render() {
    return (
      <div className="amber darken-1">
        <BrowserRouter>
          <div className = "App">
            <Switch>
              <Route exact path='/' component= {Home} />
              <Route path='/signin' component = { SignIn } />
              <Route path='/signup' component = { SignUp } />
              <Route path='/calculate' component = { CaloriesWizard } />
              <Route path='/history' component = { History } />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
