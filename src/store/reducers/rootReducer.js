import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import mealReducer from './mealReducer';
import caloriesReducer from './caloriesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  caloriesReducer: caloriesReducer,
  mealReducer: mealReducer
});

export default rootReducer