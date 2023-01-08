import {useMemo} from "react";

import {styled} from "@mui/material/styles";

import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableFooter from "@mui/material/TableFooter";
import TableRow from  '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import Chip from "@mui/material/Chip"


const VTableRow = styled(TableRow)(({theme})=>({
    "&.MuiTableRow-root":{
        backgroundColor:theme.palette.primary.light,
        ".MuiTableCell-root":{
            color:theme.palette.primary.contrastText
        }
    }
}));


interface Transaction{
    id:string,
    description:string,
    comment:string,
    timeStamp:string,
    status:"Successful"|"Failed"|"Processing",
    [i:string]:any
}

const convertStatus = (d:string)=>(d==="Successful"?"success":d==="Failed"?"error":"info");

export interface TransactionTableProps{
    data:Transaction[]
}


export default ({data}:TransactionTableProps)=>{

    const dataKeys = useMemo(()=>Object.keys(data[0]||[]),[data]);

    return (
        <TableContainer component={Paper} elevation={3}>
            <Table>
                <TableHead>
                    <VTableRow>
                        {dataKeys.map((k,i)=>
                        <TableCell key={i}>
                            <Typography variant="button" fontWeight="bold">{k}</Typography>
                        </TableCell>
                        )}
                    </VTableRow>
                </TableHead>
                <TableBody>
                    {data.map((d)=>
                        <TableRow key={d.id}>
                            {dataKeys.map((k,i)=>
                            <TableCell align={k==="status"?"center":"left"} key={i}>
                                {k==="status"?
                                <Chip label={d[k]} color={convertStatus(d[k])}/>
                                :<Typography>{d[k]}</Typography>}
                            </TableCell>)}
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination count={75} rowsPerPage={10} page={0} onPageChange={()=>{}}/>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    );
}
