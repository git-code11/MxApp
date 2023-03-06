import '../styles/globals.css'
import { AppProps } from 'next/app';
import Head from 'next/head';

import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import AppProvider from "../redux";
import FirebaseProvider from "../context/firebase";

import NotificationStatus from "../components/NotificationStatus";

import LoadingStatus from "../components/LoadingStatus";

import {useRouteChangeHandler, useAuthChangeListener, useProfileChangeListener} from "../hooks/auth";



declare module '@mui/material/styles'{
  interface Palette{
    tertiary?:Palette["primary"],
    neutral?:Palette["primary"]
  }

  interface PaletteOptions{
    tertiary?:PaletteOptions["primary"],
    neutral?:PaletteOptions["primary"]
  }

}

declare module '@mui/material/AppBar'{
  interface AppBarPropsColorOverrides{
      neutral:true,
      tertiary:true
  }
}

const theme = createTheme({
  palette: {
    mode:"light",
    primary: {
      main: '#070e23'
    },

    secondary: {
      main: '#d89b05'
    },

    tertiary: {
      main:'#f0f8ff',
      contrastText:'#070e23'
    },

    neutral:{
      main:'#fff',
      contrastText:'#070e23'
    }
  }
});


const CustomProgressOnRoute = ()=>{
  useRouteChangeHandler();
  useAuthChangeListener();
  useProfileChangeListener();
  return (
    <div/>
  );
}



export default function App({ Component, pageProps }: AppProps) {


  

  return(
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="manifest" href="manifest.webmanifest"/>
      </Head>
      <Box sx={{backgroundColor:"background.paper", color:"text.primary", minHeight:"100vh"}}>
        <CssBaseline enableColorScheme={true}/>
        
        <FirebaseProvider>
          <AppProvider>

            <>
              <CustomProgressOnRoute/>
              <NotificationStatus/>
              <LoadingStatus/>
            </>

            <Component {...pageProps} />

          </AppProvider>
        </FirebaseProvider> 
          
      </Box>
    </ThemeProvider>
  );
}
