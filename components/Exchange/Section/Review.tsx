
import Typography from '@mui/material/Typography';

import Paper from "@mui/material/Paper";

import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { ViewSectionProps } from "../Base";
import SimpleDataTable,{SimpleDataTableProps} from "../../SimpleDataTable";

interface ReviewSectionProps extends ViewSectionProps{
    data:SimpleDataTableProps["data"]
}

export default (props:ReviewSectionProps)=>
    <Paper sx={{p:2}}>
        <Stack spacing={3}>
            <Typography>Review Transaction Information</Typography>
            <SimpleDataTable data={props.data}/>
            <Stack direction="row" justifyContent="right">
                <Button sx={{py:2}} endIcon={<ArrowForwardIcon/>} variant="contained" color="warning" onClick={props.onNext}>Proceed</Button>
            </Stack>
        </Stack>
    </Paper>
;