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

import React, { useCallback, useMemo, useState } from "react";


interface PreviewDocumentProps{
    active:boolean,
    onClose?:()=>void,
    title:string,
    documents:any
}

const PreviewPage = ({src}:{src:string})=><Avatar variant="square" src={src} sx={{width:"100%", height:"auto", mx:"auto"}}/>


const PreviewDocument =  (props:PreviewDocumentProps)=>{
    const {active, title, onClose, documents} = props;
    
    const [_active, setActive] = useState(0);
    
    const pages = useMemo(()=>documents.map((d:any)=><PreviewPage src={d.path}/>),[documents]);

    return (
        <Dialog open={active} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Stack spacing={1}>
                    {documents.length>1?(
                        <Tabs value={_active} onChange={(_,value)=>setActive(value)}>
                            {props.documents.map((d:any)=><Tab key={d.label} label={d.label}/>)}
                        </Tabs>)
                    :""}
                    <SwitchTransition>
                        <Fade key={props.documents[_active].path}>
                            <div>
                            {pages[_active]} 
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


const Preview = (props:any)=>{
    const {title, documents, ...moreProps} = props;
    
    const [active, setActive] = useState(false);

    const onClose = useCallback(()=>{
        setActive(false);
    },[setActive]);

    const onOpen = useCallback(()=>{
        setActive(true);
    },[setActive]);

    return (
        <>
            <Button {...moreProps} onClick={onOpen}/>
            <PreviewDocument {...{active, title, documents, onClose}}/>
        </>
    );
}

export default PreviewDocument;
export {Preview};