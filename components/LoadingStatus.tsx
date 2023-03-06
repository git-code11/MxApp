import {Backdrop, CircularProgress} from "@mui/material";

import { useSelector} from "react-redux";


const LoadingStatus = ()=>{

    const loading = useSelector((state:any)=>state.loaderStatus);

    return (
        <Backdrop open={loading} sx={{zIndex:(style)=>style.zIndex.drawer + 2}}>
            {loading && <CircularProgress color="secondary" size={50}/>}
        </Backdrop>
    );
};


export default LoadingStatus;
