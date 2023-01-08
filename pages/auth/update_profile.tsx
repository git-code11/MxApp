import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Fab from "@mui/material/Fab";

import SaveIcon from "@mui/icons-material/Save";


import FormFieldList from "../../components/Profile/FormFieldList";

const userInfoData = [
    {name:"firstName", label:"First Name", required:true},
    {name:"lastName", label:"Last Name", required:true},
    {name:"phoneNumber", label:"Phone Number" , required:true},
    {name:"email", label:"Email Address" , required:true},
    {name:"address", label:"Address"},
    {name:"nationality", label:"Nationality", required:true, options:Array(6).fill("Nigeria")},
    {name:"state", label:"State", required:true, isSelect:true, options:[]},
];


export default function(){
    return (
        <Box>
            <BackHeader title="Update Profile" color="neutral"/>
            <Container sx={{pt:8,pb:3}}>
                <Paper component="form" elevation={3} sx={{p:2}}>
                    <FormFieldList
                        title="User Information"
                        data={userInfoData}
                        pics={{path:"/pics.jpeg"}}
                    />
                </Paper>
            
            </Container>
            <Fab color="primary" sx={{position:"fixed", bottom:"20vmin", right:"5vmin"}}>
                <SaveIcon/>
            </Fab>
        </Box>
    );
}