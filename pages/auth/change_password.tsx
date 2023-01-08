import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";


import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


import TextField from "@mui/material/TextField";

import LogoutIcon from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader"

export default function(){
    return (
        <Box>
            <BackHeader color="neutral"/>
            <Container sx={{pt:10,pb:1}}>
                <Card>
                    <CardHeader title={<Typography variant="h6">Create New Password</Typography>}/>
                    <CardContent>
                        <Stack spacing={2}>   
                            <TextField name="password" label="Password" type="password"/>
                            <TextField name="confirm_password" label="Confirm Password"/>
                            <Button variant="outlined" color="primary" size="large">Save</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}
