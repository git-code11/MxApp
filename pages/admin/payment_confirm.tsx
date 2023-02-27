import BackHeader from "../../components/BackHeader";
import Navigation from "../../components/Navigation";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import StepDisplay from "../../components/Exchange/StepDisplay";
import ExecuteSection from "../../components/Exchange/Section/Execute";

const stepsLabel = [
    {label:"Choosing Service"},
    {label:"Review Information"},
    {label:"Making Payment"},
    {label:"Confirm Payment"}
]

export default function(){
    
    
    return (
        <Box>
            {<BackHeader title="Exchange Service" color="neutral"/>}

            <Container sx={{pt:10,pb:8}}>
                <StepDisplay labels={stepsLabel} active={3}/>
                
                <ExecuteSection/>
            </Container>

            <Navigation/>
        </Box>
    );
}