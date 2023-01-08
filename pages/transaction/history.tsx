
import Navigation from "../../components/Navigation";

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

import TransactionTable,{TransactionTableProps} from "../../components/Transaction/Table";


const tempData = ["Successful","Successful","Failed","Processing","Processing"].map(x=>
    ({id:"mxt73002", description:"A note to describe the transaction", 
    comment:"Transaction Document should be here", timeStamp:(new Date()).toDateString(), status:x}));

export default function(){
    return (
        <Box>
            <Container sx={{pt:2, pb:8}}>
                <Typography variant="h4">Transaction History</Typography>
                <br/>
                <TransactionTable data={tempData as TransactionTableProps["data"]}/>
            </Container>
            <Navigation/>
        </Box>
    );
}