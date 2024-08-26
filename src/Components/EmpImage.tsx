import React from 'react';
import { Box, Typography } from '@mui/material';

interface EmpImageProps {
  empId: string;
  empName: string;
  imageUrl: string; 
}

const EmpImage: React.FC<EmpImageProps> = ({ imageUrl, empName , empId }) => {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"  
    >
      <Box position="relative" display="inline-block" width="200px">
        <img 
          src={imageUrl} 
          alt={`${empName}'s profile`} 
          style={{ 
            width: '100%', 
            borderRadius: '8px',
            objectFit: 'cover',
            height: '100%'
          }} 
        />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bgcolor="rgba(0, 0, 0, 0.5)"
          color="white"
          padding="8px"
          style={{
            backdropFilter: 'blur(1px)',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {empId}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {empName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmpImage;
