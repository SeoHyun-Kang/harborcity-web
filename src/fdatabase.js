import React, { useState } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import PanelHeader from "components/PanelHeader/PanelHeader.js";

const firebaseConfig = {
  apiKey: "AIzaSyDx4AZNCk2JTvnWgmf-54niDCA8vh7O8_Q",
  authDomain: "harbor-city.firebaseapp.com",
  projectId: "harbor-city",
  storageBucket: "harbor-city.appspot.com",
  messagingSenderId: "330066850425",
  appId: "1:330066850425:web:47fded6a96c11185445aa8",
  measurementId: "G-YQWV79VN3S"
};

if (!firebase.apps.length) {

  firebase.initializeApp(firebaseConfig);

} else {

  firebase.app();

}

const db = firebase.firestore(); //store 사용

function p_data() {
  const [email, setNumber] = useState(0);
  const handleClick = () => {
    db.collection('users') //조회할 collection 넣어준다.
      .doc(email) // 조회할 document 를 넣어준다.
      .get()
      .then(doc => {
      //db에 해당 number 가 없을 경우
        if (!doc.data()) {
          alert(`${email}님 환영합니다.`);
      // 존재할경우 
        } else {
          alert(`현재 con 갯수 : ${doc.data().cons_amount}`);
        }
      });
  };
  const handleChange = e => {
    setNumber(e.target.value);
  };
  return (
    <>
      <PanelHeader size="sm" />
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
      <input value={email} onChange={handleChange}></input>
      <button onClick={handleClick}>사용자 조회</button>
      </div>
    </>
  );
}

export default p_data;