const firebase = window.firebase;

const config = {
  apiKey: "AIzaSyCNiF9PW4ukkxb3978QaMS78Eh87MJm910",
  authDomain: "on-the-wall-6db67.firebaseapp.com",
  databaseURL: "https://on-the-wall-6db67.firebaseio.com",
  projectId: "on-the-wall-6db67",
  storageBucket: "on-the-wall-6db67.appspot.com",
  messagingSenderId: "933641674676"
};

firebase.initializeApp(config);

const storage = window.firebase.storage;
const database = window.firebase.database;

export {
  storage,
  database
}
