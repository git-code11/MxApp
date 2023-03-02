import { useRouter } from "next/router";
import { useEffect } from "react";


export default ()=>{
    const router = useRouter();

    useEffect(()=>{
        router.replace("/exchange/select");
    },[])

    return <div/>
}