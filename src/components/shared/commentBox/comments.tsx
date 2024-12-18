import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface CommentBoxProps {
  lable: string;
  value: string;
  name?: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;

  onChange: (value: string) => void;
}

export default function CommentBox({ value, onChange }: CommentBoxProps) {
    const [isDefault, setIsDefault] = React.useState(value === 'Add your comment here..');
  
    React.useEffect(() => {
      if (value !== 'Add your comment here..') {
        setIsDefault(false);
      }
    }, [value]);

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
      // Perform action with the comment (e.g., dispatch to a store or send to a server)
    }
    onChange('Add your comment here..');
    setIsDefault(true);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
        />
      </div>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ m: 1 }} useFlexGap flexWrap="wrap">
        {predefinedTexts.map((text, index) => (
          <Button
            key={index}
            variant="outlined"
            onClick={() => handleAddText(text)}
          >
            {text}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
