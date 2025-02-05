import React from 'react';
import { Stack, Rating, FormHelperText } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useFormikContext } from 'formik';

export interface StarReviewProps {
  name: string;
  type?: 'star' | 'face';
  errorText?: string | false;
  disabled?: boolean;
  
}

export const customIcons: { [index: number]: { icon: React.ReactElement } } = {
  1: { icon: <SentimentVeryDissatisfiedIcon /> },
  2: { icon: <SentimentDissatisfiedIcon /> },
  3: { icon: <SentimentSatisfiedIcon /> },
  4: { icon: <SentimentSatisfiedAltIcon /> },
  5: { icon: <SentimentVerySatisfiedIcon /> },
};

function IconContainer(props: { value: number; selectedValue: number | null }) {
  const { value, selectedValue, ...other } = props;

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
      data-testid={`icon-container-${value}`}
      style={{
        color: iconColor,
        transition: 'color 0.3s',
      }}
    >
      {customIcons[value].icon}
    </span>
  );
}

export const StarReview: React.FC<StarReviewProps> = ({ name, type = 'star', errorText , disabled = false }) => {
  const { values, setFieldValue } = useFormikContext<any>();

  const value = values[name] || null;

  const handleChange = (_event: React.ChangeEvent<unknown>, newValue: number | null) => {
    if (!disabled) {
      setFieldValue(name, newValue);
    }
  };

  return (
    <Stack spacing={2}>
      {type === 'face' ? (
        <Rating
          value={value}
          onChange={handleChange}
          IconContainerComponent={(props) => <IconContainer {...props} selectedValue={value} />}
          highlightSelectedOnly
          data-testid="star-rating"
          disabled={disabled}
        />
      ) : (
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          data-testid="face-rating"
          disabled={disabled}
        />
      )}
      {errorText && <FormHelperText error>{errorText}</FormHelperText>}
    </Stack>
  );
};
