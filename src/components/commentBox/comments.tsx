import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addComment } from './commentSlice';

export default function CommentBox() {
  const [comment, setComment] = React.useState('');
  const [isDefault, setIsDefault] = React.useState(true);
  const dispatch = useDispatch();

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
      setComment(text);
      setIsDefault(false);
    } else {
      setComment((prevComment) => prevComment + ' ' + text);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsDefault(false);
    setComment(value);
  };

  const handleFocus = () => {
    if (isDefault) {
      setComment('');
      setIsDefault(false);
    }
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      dispatch(addComment(comment));
    }
    setComment('Add your comment here..');
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
          value={comment}
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
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Submit Comment
      </Button>
    </Box>
  );
}