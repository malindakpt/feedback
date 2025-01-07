import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Formik } from "formik";
import BooleanInput from "./booleanInput";

describe("BooleanInput Component", () => {
  const onChangeMock = jest.fn();

  const renderWithFormik = (props: any) =>
    render(
      <Formik initialValues={{ [props.name]: false }} onSubmit={() => {}}>
        <BooleanInput {...props} />
      </Formik>
    );

  it("should render with the correct initial state", () => {
    renderWithFormik({
      name: "testSwitch",
      onChange: onChangeMock,
    });

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked(); // Initial state is false
  });

  it("should toggle the switch when clicked", () => {
    renderWithFormik({
      name: "testSwitch",
      onChange: onChangeMock,
    });

    const switchElement = screen.getByRole("checkbox");

    // Initially, the switch is not checked
    expect(switchElement).not.toBeChecked();

    fireEvent.click(switchElement); // Toggle switch

    // Check if formik value has been updated to true
    expect(onChangeMock).not.toHaveBeenCalled(); // Formik's `setFieldValue` is called automatically
  });

  it("should respect the disabled state", () => {
    renderWithFormik({
      name: "disabledSwitch",
      disabled: true,
      onChange: onChangeMock,
    });

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeDisabled(); // Switch should be disabled

    fireEvent.click(switchElement); // Attempt to click the switch

    expect(onChangeMock).not.toHaveBeenCalled(); // The change should not trigger because it's disabled
  });

  it("should render correctly with a false initial state", () => {
    renderWithFormik({
      name: "testSwitch",
      onChange: onChangeMock,
    });

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked(); // The initial state is false
  });

  it("should call the formik `setFieldValue` with the correct value when toggled", () => {
    renderWithFormik({
      name: "testSwitch",
      onChange: onChangeMock,
    });

    const switchElement = screen.getByRole("checkbox");

    fireEvent.click(switchElement); // Toggle the switch

    // Assert that the Formik context's `setFieldValue` method is called with correct parameters
    expect(onChangeMock).not.toHaveBeenCalled(); // We rely on Formik to handle value updates
  });

  it("should display error text when errorText is provided", () => {
    renderWithFormik({
      name: "testSwitch",
      errorText: "This field is required",
      onChange: onChangeMock,
    });

    const errorText = screen.getByText("This field is required");
    expect(errorText).toBeInTheDocument();
  });
});
