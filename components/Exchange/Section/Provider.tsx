import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {onNext, onPrev} from "../../../redux/exchange";

const useNext:any = ()=>{
    const dispatch = useDispatch();
    const next = useCallback(()=>dispatch(onNext()),[dispatch]);
    return next;
}

const usePrev:any = ()=>{
    const dispatch = useDispatch();
    const next = useCallback(()=>dispatch(onPrev()),[dispatch]);
    return next;
}


export {useNext, usePrev};