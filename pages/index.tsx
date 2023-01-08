import NextLink from 'next/link';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default ()=>
  <Stack spacing={2} justifyContent="center" alignItems="center" sx={{width:"100vw", height:"100vh", backgroundColor:"tertiary.main"}}>
      <Typography variant='h3' color="primary">MxAPP</Typography>
      <Button variant="outlined" component={NextLink} href="/auth/log_in">Explore</Button>
  </Stack>