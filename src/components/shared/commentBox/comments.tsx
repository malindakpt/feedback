import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface CommentBoxProps {
  label: string;
  value: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  initialValue?: string;
}

const CommentBox: React.FC<CommentBoxProps> = ({
  label,
  value,
  name,
  required = false,
  disabled = false,
  onChange,
  initialValue = 'Add your comment here..',
}) => {
  const [isDefault, setIsDefault] = useState(value === initialValue);

  useEffect(() => {
    if (value !== initialValue) {
      setIsDefault(false);
    }
  }, [value, initialValue]);

  const predefinedTexts = [
    'Actually the service is very good.',
    'Excellent service.',
    'Great experience.',
    'Very satisfied.',
    'Highly recommended.',
    'Outstanding job.',
    'Very poor.',
    'Needs improvement.',
    'Disappointing experience.',
    'Slow service.',
    'Unhelpful staff.',
  ];

  const handleAddText = (text: string) => {
    if (isDefault) {
      onChange(text);
      setIsDefault(false);
    } else {
      onChange(value + ' ' + text);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setIsDefault(false);
    onChange(inputValue);
  };

  const handleFocus = () => {
    if (isDefault) {
      onChange('');
      setIsDefault(false);
    }
  };

  const handleAddComment = () => {
    if (value.trim() !== '') {
      alert(`Comment added: ${value}`);
    }
    onChange(initialValue);
    setIsDefault(true);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label={label}
          name={name}
          required={required}
          multiline
          rows={4}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          disabled={disabled}
        />
      </div>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ m: 1 }} useFlexGap flexWrap="wrap">
        {predefinedTexts.map((text, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleAddText(text)}
            disabled={disabled}
          >
            {text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CommentBox;
