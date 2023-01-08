import { useCallback } from 'react';
import AppBar,{AppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { ArrowBackOutlined } from "@mui/icons-material";

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';



export default ({title, elevation, color, action}:{title?:string, elevation?:AppBarProps["elevation"], color?:AppBarProps["color"], action?:()=>void})=>{
    const router = useRouter();

    const back = useCallback(router.back, [router]); 

    return (
    <AppBar elevation={elevation??0} color={color??"transparent"}>
        <Toolbar>
            <IconButton color="inherit" onClick={action??back}>
                <ArrowBackOutlined fontSize="large"/>
            </IconButton>
            <Typography variant="h6">{title}</Typography>
        </Toolbar>
    </AppBar>
    )
}
;