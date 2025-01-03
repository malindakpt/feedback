import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Formik, Form } from "formik";
import DateInput, { DateInputProps } from "./dateInput";

describe("DateInput Component with Formik", () => {
  const renderWithFormik = (props: DateInputProps) =>
    render(
      <Formik
        initialValues={{ startDate: "" }}
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
    expect(input).toHaveValue("");
  });

  it("should reflect changes in Formik state", () => {
    renderWithFormik({ label: "Start Date", name: "startDate" });

    const input = screen.getByLabelText("Start Date");

    act(() => {
      fireEvent.change(input, { target: { value: "2024-02-01" } });
    });

    expect(input).toHaveValue("2024-02-01");
  });

  it("should show Formik validation error", async () => {
    renderWithFormik({ label: "Start Date", name: "startDate" });

    const input = screen.getByLabelText("Start Date");

    act(() => {
      fireEvent.blur(input);
    });

    const errorMessage = await screen.findByText("Date is required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should show custom error text", async () => {
    renderWithFormik({
      label: "Start Date",
      name: "startDate",
      errorText: "Custom error message",
    });

    const input = screen.getByLabelText("Start Date");

    act(() => {
      fireEvent.blur(input);
    });

    const errorMessage = await screen.findByText("Custom error message");
    expect(errorMessage).toBeInTheDocument();
  });
});
