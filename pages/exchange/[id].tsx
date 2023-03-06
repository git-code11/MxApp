import { useMemo, useRef} from "react";
import BackHeader from "../../components/BackHeader";


import Container from "@mui/material/Container";

import Box from "@mui/material/Box";

import StepDisplay from "../../components/Exchange/StepDisplay";


import {SwitchTransition} from "react-transition-group";
import Slide from "@mui/material/Slide";


import {useRouter} from "next/router";

import allSection,{stepsLabel, getId, useNav} from "../../components/Exchange/Section";


import { useAuthentication } from "../../hooks/auth";

const ViewSection = ({id}:any)=>{
    
    const Section = allSection[id].component;

    return <Section/>
}



export default function(){
    
    useAuthentication();
    
    const containerRef = useRef(null);

    const router = useRouter();
    
    const id = useMemo(()=>getId(router.query.id as string),[router.query]);

    const {prev}:any = useNav();

    console.log("Router",router);

    return (
        <Box>
            <BackHeader title="Exchange Service" color="neutral" action={prev}/>

            <Container sx={{pt:10,pb:8}} ref={containerRef}>
                <StepDisplay labels={stepsLabel} active={allSection[id].labelpos}/>
                
                <SwitchTransition>
                    <Slide key={id} direction="left">
                        <div>
                            <ViewSection id={id}/>
                        </div>
                    </Slide>
                </SwitchTransition>
            </Container>

        </Box>
    );
}