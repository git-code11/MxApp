import {useState, useMemo, useCallback, useRef} from "react";
import BackHeader from "../../components/BackHeader";
import Navigation from "../../components/Navigation";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import StepDisplay from "../../components/Exchange/StepDisplay";
import SelectionSection from "../../components/Exchange/Section/Selection";
import ReviewSection from "../../components/Exchange/Section/Review";
import PaymentSection from "../../components/Exchange/Section/Payment";
import ConfirmSection from "../../components/Exchange/Section/Confirm";
import CompleteSection from "../../components/Exchange/Section/Complete";

import {SwitchTransition} from "react-transition-group";
import Slide from "@mui/material/Slide";

import {createSelector} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import {usePrev} from "../../components/Exchange/Section/Provider";


const stepsLabel = [
    {label:"Choosing Service"},
    {label:"Review Information"},
    {label:"Making Payment"},
    {label:"Confirm Payment"}
]

const allSection = [SelectionSection, ReviewSection, PaymentSection, ConfirmSection, CompleteSection];

const _exchangeProgressSelector = createSelector((state:any)=>state.exchange,(ex:any)=>ex.progress??0); 

export default function(){
    const pos = useSelector(_exchangeProgressSelector);
    const prev = usePrev();
    const ViewSection = useMemo(()=>allSection[pos],[pos]);

    const containerRef = useRef(null);
    
    return (
        <Box>
            {pos !== 3 && <BackHeader title="Exchange Service" color="neutral" action={(pos > 0 && pos < 3) ?prev:undefined}/>}

            <Container sx={{pt:10,pb:8}} ref={containerRef}>
                <StepDisplay labels={stepsLabel} active={pos}/>
                
                <SwitchTransition>
                    <Slide key={pos} direction="left">
                        <div>
                            <ViewSection/>
                        </div>
                    </Slide>
                </SwitchTransition>
            </Container>

            <Navigation/>
        </Box>
    );
}