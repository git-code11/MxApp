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

import { TransactionDetailsProps } from "../../components/Transaction/Details";
import { TransctionStatusProps } from "../../components/Transaction/Status";

import {SwitchTransition} from "react-transition-group";
import Slide from "@mui/material/Slide";
import PreviewDocument from "../../components/PreviewDocument";


const stepsLabel = [
    {label:"Choosing Service"},
    {label:"Review Information"},
    {label:"Making Payment"},
    {label:"Confirm Payment"}
]

const selection_fields=[
    {name:"description", label:"Description", value:"That is all we got to start moving"},
    {name:"service", label:"Exchange Service", value:"Naira to Eth",
        option:Array(5).fill(0).map((k,i)=>({label:"Service "+i,value:"S"+i}))
    },
    {name:"quantity", label:"Exchange Quantity", value:"2eth @ 300Naira",
        option:Array(5).fill(0).map((k,i)=>({label:"Quantity "+i,value:"Q"+i}))
    }    
];


const allSection = [SelectionSection, ReviewSection, PaymentSection, ConfirmSection, CompleteSection];

const transactionStatus = {
    id:"pst38830jj",
    status:"info",
    statusText:"Idle"
} as TransctionStatusProps;


const bankDetails = {
    bankName:"Kuda MicroFinance Inc.",
    accountNumber:298047399499277,
    accountName:"Federick, Launcher",
    amount:"$45,0999",
}

const walletDetails = {
    name:"Etherum",
    baseName:"ETH",
    address:"0x3884jjeoowjj",
    amount:235533
}

const transactionDetails = {
    bank: bankDetails,
    wallet: walletDetails
} as unknown as TransactionDetailsProps;


const previewData = [
    {
        label:"Client Document",
        path:"/pics.jpeg"
    },
    {
        label:"Admin DOcument",
        path:"/pics.jpeg"
    }
];

export default function(){
    const [pos, setPos] = useState<number>(0);
    const [previewActive, setPreviewActive] = useState(false);
    const onNext = useCallback(()=>setPos(d=>++d),[setPos]);

    const onPrev = useCallback(()=>setPos(d=>--d),[setPos]);

    const onPreview = useCallback(()=>setPreviewActive(d=>!d),[setPreviewActive])

    const ViewSection = useMemo(()=>allSection[pos],[pos]);

    const containerRef = useRef(null);
    
    return (
        <Box>
            {pos !== 3 && <BackHeader title="Exchange Service" color="neutral" action={(pos > 0 && pos < 3) ?onPrev:undefined}/>}

            <Container sx={{pt:10,pb:8}} ref={containerRef}>
                <StepDisplay labels={stepsLabel} active={pos}/>
                <SwitchTransition>
                    <Slide key={pos} direction="left">
                        <div>
                            <ViewSection 
                                current={pos}
                                onNext={onNext}
                                onPrev={onPrev}
                                onPreview={onPreview}
                                fields={selection_fields}
                                data={selection_fields}
                                transactionStatus={transactionStatus}
                                transactionDetails={transactionDetails}
                                />
                        </div>
                    </Slide>
                </SwitchTransition>
            </Container>


            <PreviewDocument active={previewActive} title="Document Preview" documents={previewData} onClose={onPreview}/>

            <Navigation/>
        </Box>
    );
}