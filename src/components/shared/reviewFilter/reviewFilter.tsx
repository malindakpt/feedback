import React from "react";
import { Grid, Button } from "@mui/material";
import { Formik, Form } from "formik";
import TextInput from "../textInput/textInput"; 
import DateInput from "../dateInput/dateInput";

interface ReviewFilterProps {
  reviewFilter: (filters: { minRating?: number; maxRating?: number; fromDate?: string; toDate?: string }) => void;
}

const ReviewFilter: React.FC<ReviewFilterProps> = ({ reviewFilter }) => {
  return (
    <Formik
      initialValues={{ minRating: "", maxRating: "", fromDate: "", toDate: "" }}
      onSubmit={(values) => {
        reviewFilter({
          minRating: values.minRating ? parseFloat(values.minRating) : undefined,
          maxRating: values.maxRating ? parseFloat(values.maxRating) : undefined,
          fromDate: values.fromDate || undefined,
          toDate: values.toDate || undefined,
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
