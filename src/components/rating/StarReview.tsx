import React, { useState } from 'react';
import { Stack, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

export interface StarReviewProps {
  onRatingChange: (value: number | null) => void;
  type?: 'star' | 'face';
}


export const customIcons: { [index: number]: { icon: React.ReactElement } } = {
  1: {    icon: <SentimentVeryDissatisfiedIcon />},
  2: {    icon: <SentimentDissatisfiedIcon />},
  3: {    icon: <SentimentSatisfiedIcon />},
  4: {    icon: <SentimentSatisfiedAltIcon />},
  5: {    icon: <SentimentVerySatisfiedIcon />},
};

function IconContainer(props: { value: number; selectedValue: number | null }) {
  const { value, selectedValue, ...other } = props;

  // Set default color to gray
  const iconColor =
    selectedValue === value
      ? value <= 2
        ? 'red'
        : value === 3
        ? 'yellow'
        : '#02e11d'
      : 'gray';

  return (
    <span
      {...other}
      style={{
        color: iconColor,
        transition: 'color 0.3s',
      }}
    >
      {customIcons[value].icon}
    </span>
  );
}

export const StarReview: React.FC<StarReviewProps> = ({ onRatingChange, type = 'star' }) => {
  const [value, setValue] = useState<number | null>(0);

  const handleChange = (_event: React.ChangeEvent<unknown>, newValue: number | null) => {
    console.log('New rating selected:', newValue);
    setValue(newValue);
    onRatingChange(newValue);
  };

  return (
    <Stack spacing={2}>
      {type === 'face' ? (
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      ) : (
        <Rating
          value={value}
          onChange={handleChange}
          IconContainerComponent={(props) => <IconContainer {...props} selectedValue={value} />}
          highlightSelectedOnly
        />
      )}
    </Stack>
  );
};
