import NextLink from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CardActionArea from "@mui/material/CardActionArea";
import Topography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Stack from "@mui/material/Stack";

interface ItemButtonProps{
    path:string
}

export default (props:ItemButtonProps)=>
    <Card elevation={3}>
        <CardActionArea component={NextLink} href={props.path}>
            <CardContent sx={{p:"10px"}}>
                <Stack direction="row" alignItems="center" justifyContent="center" sx={{mb:"15px"}}>
                    <Avatar src="/eth.png" sx={{width:30, height:"auto"}}>ETH</Avatar>
                    <ArrowForwardIcon fontSize="small"/>
                    <Avatar src="./naira.png" sx={{width:30, height:"auto"}}>NGN</Avatar>
                </Stack>
                <Topography align="center" fontWeight="bold">
                    Etherum
                    <br/>to<br/>
                    Naira
                </Topography>
            </CardContent>
        </CardActionArea>
    </Card>
;