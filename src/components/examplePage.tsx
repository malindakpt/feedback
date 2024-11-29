import React, { useState } from 'react';
import AutoCompleteInput from '../components/shared/autoComplete/autoCompleteInput';
import { Box, Typography, Button } from '@mui/material';

const ExamplePage: React.FC = () => {
  const [fruit, setFruit] = useState<string>(''); // State for storing selected fruit

  // Example options for the autocomplete input
  const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Mango', 'Orange'];

  // Input validation function
  const validateFruitInput = (input: string) => {
    if (!input) return 'Please select a fruit';
    if (!fruitOptions.includes(input)) return 'Invalid fruit selection';
    return '';
  };

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateFruitInput(fruit)) {
      alert(`You selected: ${fruit}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', boxShadow: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Example Page
      </Typography>

      <form onSubmit={handleSubmit}>
        <AutoCompleteInput
          label="Select a Fruit"
          value={fruit}
          onChange={(newValue) => setFruit(newValue)}
          options={fruitOptions}
          required
          validateInput={validateFruitInput}
          disabled
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!fruit}
          sx={{ marginTop: '1rem' }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ExamplePage;
