import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Fab from "@mui/material/Fab";

import SaveIcon from "@mui/icons-material/Save";

import FormFieldList from "../../components/Profile/FormFieldList";

const bankInfoData = [
    {name:"bankName", label:"Bank Name", required:true},
    {name:"acctNo", label:"Account Number", required:true},
    {name:"acctName", label:"Account Name", required:true},
];

export default function(){
    return (
        <Box>
            <BackHeader title="Update Info" color="neutral"/>
            <Container sx={{pt:8,pb:3}}>
                <Paper component="form" elevation={3} sx={{p:2}}>
                    <FormFieldList
                        title="Bank Information"
                        data={bankInfoData}
                    />
                </Paper>
            </Container>
            <Fab color="primary" sx={{position:"fixed", bottom:"20vmin", right:"5vmin"}}>
                <SaveIcon/>
            </Fab>
        </Box>
    );
}