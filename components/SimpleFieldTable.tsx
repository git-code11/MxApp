
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from  '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";


export interface SimpleFieldTableProps{
    data:{
        [i:string]:string|number
    }
}

export default ({data}:SimpleFieldTableProps)=>
    <TableContainer>
        <Table>
        <TableBody>
            {Object.entries(data).map(d=>
                <TableRow>
                    <TableCell>{d[0]}</TableCell>
                    <TableCell>{d[1]}</TableCell>
                </TableRow>
            )}
        </TableBody>
        </Table>
    </TableContainer>
;