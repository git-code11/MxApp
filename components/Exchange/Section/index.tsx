
import SelectionSection from "./Selection";
import ReviewSection from "./Review";
import PaymentSection from "./Payment";
import ConfirmSection from "./Confirm";
import CompleteSection from "./Complete";


import { useRouter } from "next/router";
import { useCallback } from "react";


const stepsLabel = [
    {label:"Choosing Service"},
    {label:"Review Information"},
    {label:"Making Payment"},
    {label:"Confirm Payment"}
]


const allSection = {
    select:{component:SelectionSection, labelpos:0, prevPath:"/home", nextPath:"/exchange/review"},
    review:{component:ReviewSection, labelpos:1, prevPath:"/exchange/select", nextPath:"/exchange/payment"},
    payment:{component:PaymentSection, labelpos:2, prevPath:"/home", nextPath:"/exchange/confirm"},
    confirm:{component:ConfirmSection, labelpos:3, prevPath:"/home", nextPath:"/exchange/complete"},
    complete:{component:CompleteSection, labelpos:4, prevPath:"/home", nextPath:"/home"},
    admin:{component:()=><div>Admin Page</div>, labelpos:5, prevPath:"/home", nextPath:"/home"}
} as any;


const getId = (id:string)=>{
    
    let _id = id?.toLowerCase()?.trim()??"invalid";
    return Object.keys(allSection).includes(_id)?_id:"select";
}


const useNav = ()=>{
    const router = useRouter();

    const {prevPath:prv, nextPath:nxt}:any = allSection[getId(router.query.id as string)];

    const prev = useCallback(()=>router.replace(prv),[prv]);
    const next = useCallback(()=>router.replace(nxt),[nxt]);
    //const prev = useCallback(()=>prv?(prv===true?()=>router.back():()=>router.push(prv)):false,[prv]);
    //const next = useCallback(()=>prv?(prv===true?()=>router.forward():()=>router.push(prv)):false,[nxt]);

    return {next, prev};
}

const useQuery = ()=>{
    const router = useRouter();
    const {id, ...args} = router.query;

    return args;
}

export default allSection;

export {stepsLabel, getId, useNav, useQuery};