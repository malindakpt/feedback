import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Box textAlign="center">
      <Avatar sx={{ bgcolor: 'primary.light'}} alt="Shehani Perera" src="https://randomuser.me/api/portraits/women/17.jpg"  />
       <Typography variant="body2">Shehani Perera</Typography> 
        </Box>  

        <Box textAlign={'center'}>
        
      <Avatar src='https://randomuser.me/api/portraits/men/81.jpg'
      alt='Pasindu Fdo' sx={{ width: 100, height: 100 }}/>

        <Box
          sx={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 1,
            p: 1,
            mt: 1,
            color: 'white'
          }}
        >
          
          <Typography variant="body2">Emp001</Typography>
          <Typography variant="body1">Pasindu Fdo</Typography>
        </Box>

        </Box>
      
    </Stack>
  );
}
