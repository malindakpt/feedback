import React from "react";
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export interface StarReviewProps {
  onRatingChange: (value: number | null) => void;
  type?: "star" | "face";
  value?: number | null; 
}

export const customIcons: { [index: number]: { icon: React.ReactElement } } = {
  1: { icon: <SentimentVeryDissatisfiedIcon /> },
  2: { icon: <SentimentDissatisfiedIcon /> },
  3: { icon: <SentimentSatisfiedIcon /> },
  4: { icon: <SentimentSatisfiedAltIcon /> },
  5: { icon: <SentimentVerySatisfiedIcon /> },
};

interface IconContainerProps {
  value: number;
  selectedValue: number | null;
}

function IconContainer({ value, selectedValue, ...other }: IconContainerProps) {
  const iconColor =
    selectedValue === value
      ? value <= 2
        ? "red"
        : value === 3
        ? "yellow"
        : "#02e11d"
      : "gray";

  return (
    <span
      {...other}
      data-testid={`icon-container-${value}`}
      style={{
        color: iconColor,
        transition: "color 0.3s",
      }}
    >
      {customIcons[value].icon}
    </span>
  );
}

export const StarReview: React.FC<StarReviewProps> = ({
  onRatingChange,
  type = "star",
  value,
}) => {
  const handleChange = (
    _event: React.ChangeEvent<unknown>,
    newValue: number | null
  ) => {
    onRatingChange(newValue);
  };

  return (
    <Stack spacing={2}>
      {type === "face" ? (
        <Rating
          value={value || 0} // Controlled value with fallback
          onChange={handleChange}
          precision={0.5}
          size="large"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          data-testid="face-rating"
        />
      ) : (
        <Rating
          value={value || 0} // Controlled value with fallback
          onChange={handleChange}
          IconContainerComponent={(props) => (
            <IconContainer {...props} selectedValue={value || null} />
          )}
          highlightSelectedOnly
          data-testid="star-rating"
        />
      )}
    </Stack>
  );
};
