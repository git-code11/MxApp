// Import the functions you need from the SDKs you need
import {createContext, useContext} from "react";
import firebaseUtil from "./util";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdAIKHSWnuJlayPrR7kvbYHV98Knyb9aA",
  authDomain: "mx-app-fbd59.firebaseapp.com",
  projectId: "mx-app-fbd59",
  // storageBucket: "mx-app-fbd59.appspot.com",
  messagingSenderId: "753993380142",
  appId: "1:753993380142:web:6ee69d3e3fd6d4d3b4cabf",
  databaseURL: "https://mx-app-fbd59-default-rtdb.firebaseio.com/",
  storageBucket:"gs://mx-app-fbd59.appspot.com"
};


const app = new firebaseUtil(firebaseConfig);

const firebaseContext = createContext();

const useFirebase = ()=>useContext(firebaseContext);

const FirebaseProvider = ({children})=>{
	return (
		<firebaseContext.Provider value={{app}}>
			{children}
		</firebaseContext.Provider>
	);
}


export default FirebaseProvider;
export {useFirebase, app as api};