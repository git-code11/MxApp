import BackHeader from "../../components/BackHeader";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader"

export default function(){
    return (
        <Box>
            <BackHeader color="neutral"/>
            <Container sx={{pt:10,pb:1}}>
                <Card>
                    <CardHeader title={<Typography variant="h6">Change Email Address</Typography>}/>
                    <CardContent>
                        <Stack spacing={2}>   
                            <TextField name="email" label="Email Address"/>
                            <Button variant="outlined" color="primary" size="large">Save</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
}