
import NextLink from "next/link";
import {useRouter} from "next/router";
import {styled} from "@mui/material/styles";
import MuiBox from '@mui/material/Box';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import ExchangeIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';


const Box = styled(MuiBox)(()=>({
    position:"fixed",
    bottom:0,
    left:0,
    right:0,
    display:"block",
    zIndex:"4"
}));

const BottomNavigation = styled(MuiBottomNavigation)(({theme})=>({
    backgroundColor:theme.palette.primary.main,
    ".MuiBottomNavigationAction-root":{
        color:theme.palette.primary.contrastText,
        "&.Mui-selected":{
            color:theme.palette.secondary.main
        }
    }
}));

const paths = [
    {label:"Home", icon:<HomeIcon/>, path:"/home"},
    {label:"Exchange", icon:<ExchangeIcon/>, path:"/exchange"},
    {label:"Transaction", icon:<HistoryIcon/>, path:"/transaction/history"},
    {label:"Menu", icon:<SettingsIcon/>, path:"/user/preference"}
]

//For Mobile Navigation Menu
export default () =>{
    const router = useRouter();
    return (
    <Box>
      <BottomNavigation showLabels value={router.pathname}>
        {paths.map(d=><BottomNavigationAction value={d.path} key={d.path} component={NextLink} label={d.label} icon={d.icon} href={d.path}/>)}
      </BottomNavigation>
    </Box>
    );
}
;