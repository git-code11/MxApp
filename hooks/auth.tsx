
import { useCallback, useEffect } from "react";

import { useDispatch, useSelector} from "react-redux";

import { createSelector } from "@reduxjs/toolkit";

import { useRouter } from "next/router";

import {logInByEmail, signUpByEmail, logOut, authChange, addProfile, getProfile} from "../redux/user";

import * as loader from "../redux/loader_status";
import * as notify from "../redux/notify_status";

import {api} from "../context/firebase";

const _selector = createSelector((state:any)=>state.user, (user:any)=>user.uid)

const useAuthentication = (condition?:Function, redirectPath?:string)=>{
    const router = useRouter();
    const user = useSelector(_selector);

    const _condition = condition ?? ((d:any)=>d);
    const _path = redirectPath ?? "/auth/log_in";

    useEffect(()=>{
        if(!_condition(user)){
            router.replace(_path);
        }
    },[user]);

    return user;
}

const useSignUp = ()=>{
    const dispatch = useDispatch();

    const email = useCallback((e:any)=>{
        dispatch((signUpByEmail as any)(e));
    },[dispatch]);


    return {email}
}


const useLogIn = ()=>{
    const dispatch = useDispatch();

    const email = useCallback((e:any)=>{
        dispatch((logInByEmail as any)(e));
    },[dispatch]);

    return {email}
}


const useLogOut = ()=>{
    const dispatch = useDispatch();

    const _ = useCallback((e:any)=>{
        dispatch((logOut as any)());
    },[dispatch]);

    return _;
}


const useAuthChangeListener = ()=>{
    const dispatch = useDispatch();
    const userInfo = useSelector((state:any)=>state.user.info);
    useEffect(()=>{
        return api.onAuthStateChanged((user:any)=>{
            console.log("auth user", user);
            dispatch(authChange(user?.uid??null));
            if(user && !userInfo)
                dispatch((getProfile as any)());
        });
    },[dispatch, userInfo]);
}


const useProfileChangeListener = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        return api.onProfileChanged(null,(data:any)=>{
            if(data?.account)
                dispatch(addProfile(data));
        });
    },[dispatch]);

    useEffect(()=>{
        return api.onBankChanged(null,(data:any)=>{
            if(data?.bank)
                dispatch(addProfile(data));
        });
    },[dispatch]);

}

const useRouteChangeHandler = ()=>{
    const router = useRouter();

    const dispatch = useDispatch();
    
    useEffect(()=>{
        const routeChangeStart = (...evt:any)=>{
            dispatch(loader.start());
        };
        
        const routeChangeComplete = (...evt: any)=>{
            dispatch(loader.stop());
        }

        const routeChangeError = (...evt:any)=>{
            dispatch(loader.stop());
        }

        router.events.on("routeChangeStart", routeChangeStart);

        router.events.on("routeChangeComplete", routeChangeComplete);

        router.events.on("routeChangeError",routeChangeError);

        return ()=>{
            router.events.off("routeChangeStart", routeChangeStart);
            router.events.off("routeChangeComplete", routeChangeComplete);
            router.events.off("routeChangeError", routeChangeError);
        }
    },[dispatch]);
}



export {useAuthentication, useSignUp, useLogIn, useLogOut, useRouteChangeHandler, 
    useAuthChangeListener, useProfileChangeListener

};