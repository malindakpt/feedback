import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ImageAvatars() {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      
      console.log('Selected file:', file);
    }
  };

  return (
    <Stack direction="row" spacing={2}>
     

      <Box textAlign="center">
        <Avatar
          src="https://randomuser.me/api/portraits/men/81.jpg"
          alt="Jane Perera"
          sx={{ width: 100, height: 100 }}
        />
        <Box
          sx={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 1,
            p: 1,
            mt: 1,
            color: 'white',
            textAlign: 'center'
          }}
        >
          <Typography variant="body1">Pasindu Fdo</Typography>
          <Typography variant="body2">Emp001</Typography>
          <input
            type="file"
            accept="image/*"
            id="upload-button"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <label htmlFor="upload-button">
            <Button
              variant="contained"
              component="span"
              sx={{ mt: 1 }}
            >
              Upload Image
            </Button>
          </label>
        </Box>
      </Box>
    </Stack>
  );
}
