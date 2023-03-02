

import {styled} from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import Grid from "@mui/material/Grid";
import Topography from "@mui/material/Typography";

import TopHeader from "../../components/TopHeader";
import Navigation from "../../components/Navigation";

import Item from "../../components/ItemButton";


const DisplaySwapSection = ()=>
        <Card elevation={5} sx={{backgroundColor:"primary.main", color:"primary.contrastText"}}>
            <CardHeader
            title="Exchange Crypto"
            subheader={<Topography color="secondary.main">Select Swap Option</Topography>}/>
            
            <CardContent>
                <Grid container spacing={1.5}>
                    {Array(6).fill(0).map((x,i)=>
                        <Grid key={i} xs={6} lg={4} item>
                            <Item path={`/exchange/select?type=${i%2==0?"SCP":"SBC"}`}/>
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        </Card>
;

const BannerImage = styled("img")(()=>({
    width:"100%",
    maxHeight:"45vmin",
    borderRadius:"5px",
}));


const BannerTitle = styled(Topography)(({theme})=>({
    padding:theme.spacing(1),
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.secondary.main,
    border:`solid 2px ${theme.palette.secondary.main}`,
    borderLeft:"none",
    borderRight:"none"
}));

const BannerSection = ()=>
    <Paper elevation={0}>
        <BannerTitle variant="h5" gutterBottom>
            Swap Easily here
        </BannerTitle>
        <Topography variant="body1" align="justify" color="primary.main">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsam totam autem maxime atque dolore libero itaque omnis doloribus voluptatem accusantium odio, iure ullam saepe nam ex id eaque corporis.
        </Topography>
    </Paper>
;

export default function(){
    return (
        <Box>
            <TopHeader/>

            <Stack spacing={2} component={Container} sx={{py:8}}>
                <BannerImage src="/banner.jpeg"/>
                <BannerSection/>
                <DisplaySwapSection/>
            </Stack>

            <Navigation/>
        </Box>
    );
}