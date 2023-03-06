import {useState, useRef} from "react";

import NextLink from "next/link";

import AppBar from '@mui/material/AppBar';

import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { Box, IconButton, Avatar, Menu, MenuItem, ListItem, ListItemText} from '@mui/material';

import {useLogOut} from "../hooks/auth";

import {useSelector} from "react-redux"

import { createSelector } from "@reduxjs/toolkit";

const _selector = createSelector((state:any)=>state.user.info, (info:any)=>({image:info?.image??"", name:info?.account?.userName??""}));

const Profile = ()=>{
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    const {image, name} = useSelector(_selector)

    const logOut = useLogOut();

    return (
        <Box>
            <Badge badgeContent={5} max={9} color="secondary" sx={{".MuiBadge-badge":{top:10,right:10}}}>
                <IconButton ref={containerRef} onClick={()=>setOpen(true)}>
                    <Avatar sx={{width:45,height:45}} src={image}/>
                </IconButton>
            </Badge>

            <Menu anchorEl={containerRef.current} open={open} onClose={()=>setOpen(false)}>
                <ListItem>
                    <ListItemText>{name}</ListItemText>
                </ListItem>
                <MenuItem component={NextLink} href="/user/profile">My Profile</MenuItem>
                <MenuItem onClick={logOut}>Log out</MenuItem>
            </Menu>
        </Box>
    );
}

export default ()=>
    <AppBar position="fixed">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                MxApp_
            </Typography>
            <Profile/>       
        </Toolbar>
    </AppBar>
;