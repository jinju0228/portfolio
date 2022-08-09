import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import '/public/css/reset.css'
import '/public/css/common.css'
import '/public/css/about.css'
import '/public/css/webclone.css'
import '/public/css/project.css'
import '/public/css/contact.css'
import '/public/js/common.js'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4dqbpliSnJPX5sh-fhjLgN64x5dGWXqk",
  authDomain: "j-jportfolio.firebaseapp.com",
  databaseURL: "https://j-jportfolio-default-rtdb.firebaseio.com",
  projectId: "j-jportfolio",
  storageBucket: "j-jportfolio.appspot.com",
  messagingSenderId: "903858117648",
  appId: "1:903858117648:web:75b72b63cdb7844e477e95"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App)
app.use(router)
app.mount('#app')

