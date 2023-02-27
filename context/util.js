import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


class Base{
	/**
		@param config => Firebase Configuration Settings
	*/
	constructor(config){
		//initialize App
		this.app = initializeApp(config);
		// Initialize Firebase Authentication and get a reference to the service
		this.auth = getAuth(this.app);
		
	}

	//turn off all eventListener 
	off(){
		console.log("off")
	}

	get currentUser(){
		return this.auth.currentUser;
	}

	signOut(){
		if(this.currentUser)
			return this.auth.signOut();
	}

	createUserWithEmailAndPassword(email, password){
		return createUserWithEmailAndPassword(this.auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    // ...
		    console.log(user);
		    return {user};
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(error);
		    return {error};
		  });
	}


	signInWithEmailAndPassword(email, password){
		return signInWithEmailAndPassword(this.auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    // ...
		    console.log(user);
			return {user}
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(error);
			return {error}
		  });
	}


	onAuthStateChanged(handler){
		return onAuthStateChanged(this.auth, (user) => {
		  if (user) {
		    // User is signed in, see docs for a list of available properties
			    // https://firebase.google.com/docs/reference/js/firebase.User
			    const uid = user.uid;
			    // ...
			  } else {
			    // User is signed out
			    // ...
			  }
			});
	}


}


export default Base;