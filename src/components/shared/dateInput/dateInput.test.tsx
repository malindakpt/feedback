import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Formik, Form } from "formik";
import DateInput, { DateInputProps } from "./dateInput";

describe("DateInput Component with Formik", () => {
  const initialValues = { startDate: "" };

  const renderWithFormik = (props: DateInputProps) =>
    render(
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: { startDate?: string } = {};
          if (!values.startDate) {
            errors.startDate = "Date is required";
          }
          return errors;
        }}
        onSubmit={() => {}}
      >
        <Form>
          <DateInput {...props} />
        </Form>
      </Formik>
    );

  it("should render with label and name", () => {
    renderWithFormik({ label: "Start Date", name: "startDate" });

    const input = screen.getByLabelText("Start Date");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(""); // Initial value from Formik
  });

  it("should reflect changes in Formik state", () => {
    renderWithFormik({ label: "Start Date", name: "startDate" });

    const input = screen.getByLabelText("Start Date");

    fireEvent.change(input, { target: { value: "2024-02-01" } });

    expect(input).toHaveValue("2024-02-01");
  });

  it("should show validation error", async () => {
    renderWithFormik({ label: "Start Date", name: "startDate" });

    const input = screen.getByLabelText("Start Date");

    fireEvent.blur(input); // Trigger validation

    const errorMessage = await screen.findByText("Date is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
