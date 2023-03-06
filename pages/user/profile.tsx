import {useState, useMemo, useCallback} from "react";
import NextLink from "next/link";
import Navigation from "../../components/Navigation";

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack"

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import EditIcon from "@mui/icons-material/Edit";

import Info from "../../components/Profile/Info";

import Slide from "@mui/material/Slide";

import {SwitchTransition} from "react-transition-group";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import csc  from "countrycitystatejson"; 

import { useAuthentication } from "../../hooks/auth";

const imgPicsSelector = createSelector((state:any)=>state.user.info, (info:any)=>info?.image);
const Pics = ()=>{
    const imgPath = useSelector(imgPicsSelector);
    return (
        <Stack direction="row" justifyContent="center">
            <Avatar sx={{width:150,height:150}} src={imgPath}/>
        </Stack>
    );
}
;

const accountSelector = createSelector((state:any)=>state.user.info?.account??{},
                                        (acct)=>({
                                            "First Name":acct.firstName,
                                            "Last Name": acct.lastName,
                                            "Phone Number":acct.phoneNumber,
                                            "Email": acct.email,
                                            "Nationality":csc.getCountryByShort(acct.nationality)?.name??"",
                                            "State":acct.state,
                                            "Address":acct.address
                                        }));

const UserInfo = ()=>{
    const data = useSelector(accountSelector);
    console.log(useSelector(state=>state.user));
    
    return (
        <Stack spacing={2}>
            <Pics/>
            <Info title="Personal Details" data={data}/>  
        </Stack>
    );
}
;

const bankSelector = createSelector((state:any)=>state.user.info?.bank??{},
                                        (bank)=>({
                                            "Bank Name":bank.bankName??"",
                                            "Account Number":bank.acctNo??"",
                                            "Account Name":bank.acctName??""
                                        }));
const BankInfo = ()=>{
    const data = useSelector(bankSelector)
    return <Info title="Account Details" data={data}/>
}
;

const InfoSection = ({active, page}:{active:number, page:JSX.Element})=>{
    return (
        <Box>
            <SwitchTransition>
                <Slide key={active} direction={active===0?"right":"left"}>
                    <Box>
                        {page}
                    </Box>
                </Slide>
            </SwitchTransition>
        </Box>
    );
}


const InfoHeader = ({active, onChange}:{active:number,onChange:(e:any, n:number)=>void})=>
    <AppBar color="neutral">
        <Toolbar>
            <Stack>
                <Typography variant="h4">Profile</Typography>
                <Box>
                    <Tabs value={active} onChange={onChange}>
                        <Tab label="User Information"/>
                        <Tab label="Bank Information"/>
                    </Tabs>
                </Box>
            </Stack>
        </Toolbar>
    </AppBar>
;


export default function(){
    const [active, setActive] = useState(0);
    const onChange = useCallback((_:any,value:number)=>setActive(value),[setActive]);

    const pages = useMemo(()=>[<UserInfo/>,<BankInfo/>],[]);

    useAuthentication();
    
    return (
        <Box>
            <InfoHeader active={active} onChange={onChange}/>

            <Container sx={{pt:14,pb:8}}>
                <InfoSection active={active} page={pages[active]}/>
            </Container>
            
            <Fab color="primary" component={NextLink} href={active===0?"/auth/update_profile":"/auth/update_bank"} sx={{position:"fixed", bottom:"20vmin", right:"5vmin"}}>
                <EditIcon/>
            </Fab>

            <Navigation/>
        </Box>
    );
}