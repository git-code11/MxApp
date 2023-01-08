
import NextLink from "next/link";

import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LogoutIcon from "@mui/icons-material/Logout";
import UserIcon from "@mui/icons-material/Person2";
import UserUpdateIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import HistoryIcon from "@mui/icons-material/ClearAll"; 

const menuData = [
    {label:"My Profile", icon:UserIcon, path:"/user/profile"},
    {label:"Update Profile", icon:UserUpdateIcon, path:"/auth/update_profile"},
    {label:"Change Password", icon:PasswordIcon, path:"/auth/change_password"},
    {label:"Change Email", icon:EmailIcon, path:"/auth/change_email"},
    {label:"Clear Transaction History", icon:HistoryIcon, action:()=>{}},
    {label:"LogOut", icon:LogoutIcon, action:()=>{}},
]

export default function(){
    return (
        <Box>
            <BackHeader color="neutral"/>
            <Container sx={{pt:10,pb:1}}>
                <List component={Paper} disablePadding elevation={4}>
                    {menuData.map(d=>
                        <ListItemButton component={d.path?NextLink:"li"} href={d.path} onClick={d.action} divider key={d.label}>
                            <ListItemIcon>
                                {<d.icon color="primary"/>}
                            </ListItemIcon>
                            <ListItemText   primary={<Typography color="primary" variant="body1" fontWeight="bold">{d.label}</Typography>} />
                        </ListItemButton>
                    )}
                </List>  
            </Container>
        </Box>
    );
}