import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBXCNOXk685WxzeEe7HwH32MoKhr-glONo",
    authDomain: "amzon-13fc5.firebaseapp.com",
    databaseURL: "https://amzon-13fc5.firebaseio.com",
    projectId: "amzon-13fc5",
    storageBucket: "amzon-13fc5.appspot.com",
    messagingSenderId: "208155686542",
    appId: "1:208155686542:web:def7729225e289e8fe3bdf"
  };

  const db=firebase.initializeApp(firebaseConfig);
  export default db;
