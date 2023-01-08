
import Typography from '@mui/material/Typography';

import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";


import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import {  DialogActions } from "@mui/material";


interface TransactionConfirmProps{

}

export default ()=>
    <Dialog open={false}>
        <DialogTitle>Transaction Action</DialogTitle>
        <DialogContent>
            <Stack spacing={1}>
                <Typography>Appropriate Action Should be taken Over this transaction</Typography>
                <TextField name="comment" placeholder="Comment on Transaction" multiline rows={4}/>
            </Stack>
        </DialogContent>
        <DialogActions>
                <Button color="error">Cancel</Button>
                <Button color="success">Approve</Button>
        </DialogActions>
    </Dialog>
;