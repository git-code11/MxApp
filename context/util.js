import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, onValue, get } from "firebase/database";
import { getStorage , ref as s_ref, uploadBytes, getBlob, getDownloadURL} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


class Base{
	/**
		@param config => Firebase Configuration Settings
	*/
	constructor(config){
		// Initialize Firebase
		this.app = initializeApp(config);
		// Initialize Firebase Authentication and get a reference to the service
		this.auth = getAuth(this.app);
		// Initialize Realtime Database and get a reference to the service
		this.db = getDatabase(this.app);
		// Initialize Cloud Storage and get a reference to the service
		this.storage = getStorage(this.app);
	}
	
	get currentUser(){
		return this.auth.currentUser;
	}

	logOut(){
		if(this.currentUser)
			return this.auth.signOut();
	}

	async createUserWithEmailAndPassword(email, password, {userName, phoneNumber}){
		try{
			const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
			const user = userCredential.user;
			
			await this.createProfileInfo({
				userId:user.uid,
				email:user.email,
				userName,
				phoneNumber
			});

			return {user};
		}
		catch(error){
			const {code, message} = error;
		    
		    return {error:true, code, message}
		}
	}



	async logInWithEmailAndPassword(email, password){
		try{
			const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
			const user = userCredential.user;
			
			return {user};
		}
		catch(error){
			const {code, message} = error;
		    
		    return {error:true, code, message}
		}
	}

	createProfileInfo({userId, email, userName, phoneNumber}){
		return this.updateProfileInfo(userId, {email, phoneNumber, userName, firstName:"", lastName:"", nationality:"", state:"", address:""});
	}

	async updateProfileInfo(userId, data){
		
		try{
			const {firstName, lastName, userName, email, phoneNumber, nationality, state, address} = data;
			
			const result = await this.insertData(`users/${userId??this.currentUser.uid}/account`, {
				firstName, 
				lastName,
				userName,
				email,
				phoneNumber,
				nationality,
				state,
				address
			})
		
			return {data:result};
		}catch(e){
			return this.formatError(e);
		}
	}


	async updateBankInfo(userId, data){
		
		try{
			const {bankName, acctNo, acctName} = data;
			
			const result = await this.insertData(`users/${userId??this.currentUser.uid}/bank`, {
				bankName, acctNo, acctName
			});
		
			return {data:result};
		}catch(e){
			return this.formatError(e);
		}
	}

	uploadProfilePic(blob){
		return this.uploadFile(blob, `profile_pics/${this.currentUser.uid}`);
	}

	getProfilePic(){
		return this.getFileURL(`profile_pics/${this.currentUser.uid}`);
	}

	async getProfile(uid){
		try{	
		const data = await this.getData(`users/${uid||this.currentUser?.uid}`);

		if(data){
			const imgURL = await this.getProfilePic();
			data["image"] = imgURL;
		}

		//console.log("getProfile",data);

		return data;
		}catch(e){
			return this.formatError(e);
		}
	}

	onAuthStateChanged(handler){
		return onAuthStateChanged(this.auth,handler);
	}

	onProfileChanged(uid, handler){
		return this.listenData(`users/${uid||this.currentUser?.uid}/account`, async (account)=>{
			const data = {account}
			try{
				if(account){
					const imgURL = await this.getProfilePic();
					data["image"] = imgURL;
				}

			}catch(e){}
			handler(data);
		});
	}

	onBankChanged(uid, handler){
		return this.listenData(`users/${uid||this.currentUser?.uid}/bank`, (bank)=>handler({bank}));
	}

	formatError(error){
		const {code, message} = error;
		return {error:true, code, message}
	}

	uploadFile(blob, path){
		const storageRef = s_ref(this.storage, path);
		return uploadBytes(storageRef, blob);
	}

	getFileBlob(path){
		const storageRef = s_ref(this.storage, path);
		return getBlob(storageRef);
	}

	getFileURL(path){
		const storageRef = s_ref(this.storage, path);
		return getDownloadURL(storageRef);
	}

	insertData(path, data){
		return set(ref(this.db, path), data);
	}

	getData(path){
		return get(ref(this.db, path)).then((snapshot) => snapshot.val());
	}

	listenData(path, handler){
		const dataRef = ref(this.db, path);
		return onValue(dataRef,  (snapshot) => {
			handler(snapshot.val());
		});
	}
}


export default Base;