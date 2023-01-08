

import Header from "./Header";
import Box from "@mui/material/Box";



export default ({showTopHeader, children}:{
  showTopHeader?:boolean,
  children:any
})=>{
    return (
       <Box>
            <Header showTopHeader={showTopHeader}/>
            <Box sx={{py:showTopHeader?4:0}}/>
            {children}
            <Box sx={{py:4}}/>
        </Box>
    );
}