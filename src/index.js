import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDDrMMcWsLWO_SUXaKpRDJ9NyqfYOLJOvY",
    authDomain: "telechatedu.firebaseapp.com",
    databaseURL: "https://telechatedu.firebaseio.com",
    projectId: "telechatedu",
    storageBucket: "telechatedu.appspot.com",
    messagingSenderId: "671082573731"
  };

  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

