import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BooleanInput from "./booleanInput";

describe("BooleanInput Component", () => {
  const onChangeMock = jest.fn();

  it("should render with the correct initial state", () => {
    render(
      <BooleanInput value={true} name="testSwitch" onChange={onChangeMock} />
    );

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeChecked();
  });

  it("should toggle the switch when clicked", () => {
    render(
      <BooleanInput value={false} name="testSwitch" onChange={onChangeMock} />
    );

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).not.toBeChecked();

    fireEvent.click(switchElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("testSwitch", true);
  });

  it("should respect the disabled state", () => {
    render(
      <BooleanInput
        value={false}
        name="disabledSwitch"
        onChange={onChangeMock}
        disabled={true}
      />
    );

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeDisabled();

    fireEvent.click(switchElement);

    expect(onChangeMock).not.toHaveBeenCalled();
  });

  it("should render correctly with a false initial state", () => {
    render(
      <BooleanInput value={false} name="testSwitch" onChange={onChangeMock} />
    );

    const switchElement = screen.getByRole("checkbox");

    expect(switchElement).toBeInTheDocument();
    expect(switchElement).not.toBeChecked();
  });

  it("should call the onChange handler with the correct name and value", () => {
    render(
      <BooleanInput value={false} name="testSwitch" onChange={onChangeMock} />
    );

    const switchElement = screen.getByRole("checkbox");

    fireEvent.click(switchElement);

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith("testSwitch", true);
  });
});
