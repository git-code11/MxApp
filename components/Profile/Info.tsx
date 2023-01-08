import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from  '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";


export interface InfoProps {
    title:string
    data:{
        [i:string]:string
    },
};

export default ({title, data}:InfoProps)=>
    <TableContainer component={Paper} elevation={3} sx={{p:1}}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={2}>
                        <Typography fontWeight="bold">{title}</Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.entries(data).map(([k,v])=>
                    <TableRow key={k}>
                        <TableCell>{k}</TableCell>
                        <TableCell>{v}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </TableContainer>
;
