import {useState, useRef} from "react";

import NextLink from "next/link";

import AppBar from '@mui/material/AppBar';

import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

import { Box, IconButton, Avatar, Menu, MenuItem} from '@mui/material';

const Profile = ()=>{
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null); 
    return (
        <Box>
            <Badge badgeContent={5} max={9} color="secondary" sx={{".MuiBadge-badge":{top:10,right:10}}}>
                <IconButton ref={containerRef} onClick={()=>setOpen(true)}>
                    <Avatar sx={{width:45,height:45}} src="/pics.jpeg"/>
                </IconButton>
            </Badge>

            <Menu anchorEl={containerRef.current} open={open} onClose={()=>setOpen(false)}>
                <MenuItem component={NextLink} href="/user/profile">My Profile</MenuItem>
                <MenuItem>Log out</MenuItem>
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