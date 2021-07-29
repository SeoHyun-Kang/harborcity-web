import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//import {AIzaSyDx4AZNCk2JTvnWgmf-54niDCA8vh7O8_Q} from '../key/api';

const config = {
    apiKey: "AIzaSyDx4AZNCk2JTvnWgmf-54niDCA8vh7O8_Q",
    authDomain: "harbor-city.firebaseapp.com",
    projectId: "harbor-city",
    storageBucket: "harbor-city.appspot.com",
    messagingSenderId: "330066850425",
    appId: "1:330066850425:web:47fded6a96c11185445aa8",
    measurementId: "G-YQWV79VN3S"
  };

let firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;