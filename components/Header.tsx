import {styled} from "@mui/material/styles";

import MuiBox from '@mui/material/Box';
import MuiBottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import HomeIcon from '@mui/icons-material/Home';
import ExchangeIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import DraftsIcon from '@mui/icons-material/Drafts';


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


//For Mobile Navigation Menu
const MobileBottomNavigation = () => 
    <Box>
      <BottomNavigation showLabels value={0}>
        <BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
        <BottomNavigationAction label="Exchange" icon={<ExchangeIcon/>} />
        <BottomNavigationAction label="Transaction" icon={<HistoryIcon/>}/>
        <BottomNavigationAction label="Menu" icon={<SettingsIcon/>}/>
      </BottomNavigation>
    </Box>
;


const MobileTopNavigation = ()=>
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                MxApp
            </Typography>

            <Badge badgeContent={5} max={9} color={"info"}>
                <IconButton color="inherit">
                    <DraftsIcon fontSize="small"/>
                </IconButton>
            </Badge>
        </Toolbar>
    </AppBar>

export default function({showTopHeader}:{showTopHeader?:boolean}){
    return (
        <>
            {showTopHeader && <MobileTopNavigation/>}
            <MobileBottomNavigation/>
        </>
    );
}