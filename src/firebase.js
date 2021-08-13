import firebase from 'firebase/app';
import 'firebase/firestore';


//import {AIzaSyDx4AZNCk2JTvnWgmf-54niDCA8vh7O8_Q} from '../key/api';

const firebaseconfig = {
  apiKey: "AIzaSyDx4AZNCk2JTvnWgmf-54niDCA8vh7O8_Q",
  authDomain: "harbor-city.firebaseapp.com",
  projectId: "harbor-city",
  storageBucket: "harbor-city.appspot.com",
  messagingSenderId: "330066850425",
  appId: "1:330066850425:web:47fded6a96c11185445aa8",
  measurementId: "G-YQWV79VN3S"
  };

  export default firebase.initializeApp(firebaseconfig);

