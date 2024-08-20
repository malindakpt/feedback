import React from 'react';
import { useState } from 'react';
import { Stack,Rating } from '@mui/material';

export const StarReview = () => {
    const [value, setValue] = useState<number | null>(1)
    console.log({ value })
    const handleChange = (
      _event: React.ChangeEvent<unknown>, 
      newValue: number | null
    ) => {
      setValue(newValue)
    }
  return (
    <Stack spacing={2}>
      <Rating 
        value={value} 
        onChange={handleChange} 
        precision={.5} 
        size='large'/>
    </Stack>
  )
}