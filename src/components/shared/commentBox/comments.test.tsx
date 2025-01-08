import React from "react";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Formik, Form } from "formik";
import CommentBox, { CommentBoxProps } from "./comments";

const renderWithFormik = (props: CommentBoxProps) =>
  render(
    <Formik
      initialValues={{ comment: "" }}
      validate={(values: { comment: string }) => {
        const errors: { comment?: string } = {};
        if (!values.comment) {
          errors.comment = "Required";
        }
        return errors;
      }}
      onSubmit={() => {}}
    >
      <Form>
        <CommentBox {...props} />
      </Form>
    </Formik>
  );

describe("CommentBox Component with Formik", () => {
  test("renders with initial state", () => {
    renderWithFormik({ label: "Comment", name: "comment" });
    const textField = screen.getByLabelText(/comment/i);
    expect(textField).toHaveValue("");
  });

  test("appends predefined text to existing value", () => {
    renderWithFormik({ label: "Comment", name: "comment" });

    // Use a flexible matcher for the button text
    const button = screen.getByText(
      (content) => content.trim() === "Actually the service is very good."
    );

    act(() => {
      fireEvent.click(button);
    });

    const textField = screen.getByLabelText(/comment/i);
    expect(textField).toHaveValue("Actually the service is very good.");
  });

  test("shows validation error", async () => {
    renderWithFormik({ label: "Comment", name: "comment" });
    const textField = screen.getByLabelText(/comment/i);

    act(() => {
      fireEvent.blur(textField); // Trigger validation
    });

    const errorMessage = await screen.findByText("Required");
    expect(errorMessage).toBeInTheDocument();
  });
});
