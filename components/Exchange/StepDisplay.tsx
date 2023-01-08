
import Typography from '@mui/material/Typography';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


interface StepDisplayProps{
    active?:number,
    labels:{label:string}[]
}

export default (props:StepDisplayProps)=>
    <Stepper alternativeLabel activeStep={props.active}>
        {props.labels.map(data=>
            <Step key={data.label}>
                <StepLabel>
                    <Typography variant="caption" fontWeight="bold">
                        {data.label}
                    </Typography>
                </StepLabel>
            </Step>
        )}
    </Stepper>
;