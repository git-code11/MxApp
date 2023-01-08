import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import ExitIcon from "@mui/icons-material/ExitToApp";

import { Avatar, DialogActions, Stack} from "@mui/material";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {SwitchTransition} from "react-transition-group";
import Fade from "@mui/material/Fade";

import { useMemo, useState } from "react";

interface PreviewDocumentProps{
    active:boolean,
    onClose?:()=>void,
    title:string,
    documents:{
        label:string,
        path:string
    }[]
}

const PreviewPage = ({src}:{src:string})=><Avatar variant="square" src={src} sx={{width:"100%", height:"auto", mx:"auto"}}/>

export default (props:PreviewDocumentProps)=>{
    const [active, setActive] = useState(0);
    
    const pages = useMemo(()=>props.documents.map(d=><PreviewPage src={d.path}/>),[props.documents]);

    return (
        <Dialog open={props.active} onClose={props.onClose}>
            <DialogTitle>{props.title}</DialogTitle>
            <DialogContent>
                <Stack spacing={1}>
                    {props.documents.length>1?(
                        <Tabs value={active} onChange={(_,value)=>setActive(value)}>
                            {props.documents.map(d=><Tab key={d.label} label={d.label}/>)}
                        </Tabs>)
                    :""}
                    <SwitchTransition>
                        <Fade key={props.documents[active].path}>
                            <div>
                            {pages[active]} 
                            </div>
                        </Fade>
                    </SwitchTransition>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button endIcon={<ExitIcon/>} variant="contained" color="error" onClick={props.onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

