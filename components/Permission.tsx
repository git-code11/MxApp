import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";


export interface PermissionProps{
    active:boolean,
    title?:string,
    content?:string,
    acceptLabel?:string,
    rejectLabel?:string,
    acceptHandler?:()=>void,
    rejectHandler?:()=>void,
}


export default (props:PermissionProps)=>
    <Dialog open={props.active}>
        <DialogTitle>{props.title??"Permission"}</DialogTitle>
        <DialogContent>{props.content ?? "Do you want to process action?"}</DialogContent>
        <DialogActions>
            <Button color="primary" onClick={props.acceptHandler}>{props.acceptLabel??"No"}</Button>
            <Button color="error" onClick={props.rejectHandler}>{props.rejectLabel??"Yes"}</Button>
        </DialogActions>
    </Dialog>
;