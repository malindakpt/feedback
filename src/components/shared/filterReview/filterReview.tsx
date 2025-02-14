import React from "react";
import { Grid, Button } from "@mui/material";
import { Formik, Form } from "formik";
import TextInput from "../textInput/textInput";
import DateInput from "../dateInput/dateInput";
import type { ReviewFilter } from "../../../interfaces/reviewFilter";
import { defaultReview } from "../../../defaultValues/defaultReview";
import AutoCompleteInput from "../autoComplete/autoCompleteInput";
import { Ratings } from "../../utils/ratings";

interface filterReviewProps {
  onFilterChange: (filter: ReviewFilter) => void;
}

const FilterReview: React.FC<filterReviewProps> = ({ onFilterChange }) => {
  return (
    <Formik
      initialValues={{ ...defaultReview }}
      onSubmit={(values) => {
        onFilterChange({
          minRating:  values.minRating ? Number(values.minRating) : 0,
          maxRating: values.maxRating ? Number(values.maxRating) : 5,
          fromDate: values.fromDate,
          toDate: values.toDate,
        });
      }}
    >

      {({ handleSubmit }) => (
        <Form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={2.5}>
              <AutoCompleteInput label="Min Rating" name="minRating" options={Ratings}/>
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <AutoCompleteInput label="Max Rating" name="maxRating" options={Ratings}/>
            </Grid>
            <Grid item xs={12} sm={2.7}>
              <DateInput label="From Date" name="fromDate" />
            </Grid>
            <Grid item xs={12} sm={2.7}>
              <DateInput label="To Date" name="toDate" />
            </Grid>
            <Grid item xs={12} sm={1.5}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Apply
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default FilterReview;
