
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from  '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";

export interface SimpleDataTableProps{
    data:{
        label:string,
        value:string|number,
    }[]
}

export default ({data}:SimpleDataTableProps)=>
    <Table>
        <TableBody>
            {data.map(d=>
                <TableRow>
                    <TableCell>{d.label}</TableCell>
                    <TableCell>{d.value}</TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
;