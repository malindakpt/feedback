import React from "react";
import { Grid, Button } from "@mui/material";
import { Formik, Form } from "formik";
import TextInput from "../textInput/textInput"; 
import DateInput from "../dateInput/dateInput";
import type { ReviewFilter } from "../../../interfaces/reviewFilterT";
import { defaultReview } from "../../../defaultValues/defaultReview";

interface ReviewFilterProps {
  onFilterChange: (filter: ReviewFilter) => void;
}

const ReviewFilter: React.FC<ReviewFilterProps> = ({ onFilterChange }) => {
  return (
    <Formik
  initialValues={{ ...defaultReview }} 
  onSubmit={(values) => {
    onFilterChange({
      minRating: values.minRating ,
      maxRating: values.maxRating ,
      fromDate: values.fromDate,
      toDate: values.toDate,
      userId: "",
      companyId: "",
      branchId: ""
    });
  }}
>

      {({ handleSubmit }) => (
        <Form>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={2.5}>
              <TextInput label="Min Rating" name="minRating" type="number" />
            </Grid>
            <Grid item xs={12} sm={2.5}>
              <TextInput label="Max Rating" name="maxRating" type="number" />
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

export default ReviewFilter;
