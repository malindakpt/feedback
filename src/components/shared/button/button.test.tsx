import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";

describe("Button Component", () => {
  const onClickMock = jest.fn();

  it("should render the button with the correct text", () => {
    render(<Button text="Click Me" color="primary" variant="contained" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Click Me");
  });

  it("should apply the correct color and variant", () => {
    render(
      <Button text="Outlined Button" color="secondary" variant="outlined" />
    );
    const buttonElement = screen.getByRole("button", {
      name: /outlined button/i,
    });

    expect(buttonElement).toHaveClass("MuiButton-outlinedSecondary");
  });

  it("should call onClick handler with the correct event and value when clicked", () => {
    render(<Button text="Click Me" onClick={onClickMock} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(expect.any(Object), true); // Verifies both event and value
  });

  it("should be disabled when the disabled prop is set", () => {
    render(
      <Button text="Disabled Button" disabled={true} onClick={onClickMock} />
    );
    const buttonElement = screen.getByRole("button", {
      name: /disabled button/i,
    });

    expect(buttonElement).toBeDisabled();

    fireEvent.click(buttonElement);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
