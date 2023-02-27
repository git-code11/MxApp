import {createContext, useContext, useState, useEffect} from "react";


const CACHE_NAME = "firebase-app-store";

const appContext = createContext();

const AppProvider = ({children})=>{
	const [state, update] = useState({user:null, active:false});

	// useEffect(()=>{
	// 	const data = localStorage.getItem(CACHE_NAME);
	// 	update()
	// },[]);

	return (
		<appContext.Provider value={{state, update}}>
			{children}
		</appContext.Provider>
	);
}

const useApp = ()=>useContext(appContext);

export default AppProvider;

export {useApp};