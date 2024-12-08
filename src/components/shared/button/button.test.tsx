import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";

describe("Button Component", () => {
  const onButtonClickMock = jest.fn();

  it("should render the button with the correct text", () => {
    render(
      <Button
        text="Click Me"
        color="primary"
        variant="contained"
        name="testButton"
      />
    );
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  it("should apply the correct color and variant", () => {
    render(
      <Button
        text="Outlined Button"
        color="secondary"
        variant="outlined"
        name="testButton"
      />
    );
    const buttonElement = screen.getByRole("button", {
      name: /outlined button/i,
    });

    expect(buttonElement).toHaveClass("MuiButton-outlinedSecondary");
  });

  it("should call onButtonClick handler with correct name and value when clicked", () => {
    render(
      <Button
        text="Click Me"
        onButtonClick={onButtonClickMock}
        name="testButton"
      />
    );
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(buttonElement);

    expect(onButtonClickMock).toHaveBeenCalledTimes(1);
    expect(onButtonClickMock).toHaveBeenCalledWith("testButton", true);
  });

  it("should be disabled when the disabled prop is set", () => {
    render(
      <Button
        text="Disabled Button"
        disabled={true}
        onButtonClick={onButtonClickMock}
        name="testButton"
      />
    );
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });

    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);

    expect(onButtonClickMock).not.toHaveBeenCalled();
  });
});
