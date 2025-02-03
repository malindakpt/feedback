import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik, Form } from "formik";
import ImageUploader from "./imageUploader";
import defaultImage from "../../resourses/defaultImage.jpg"; // Adjust path if necessary

// Helper function to wrap ImageUploader with Formik
const renderWithFormik = (props: any) => {
  return render(
    <Formik
      initialValues={{ profileImage: null }}
      onSubmit={jest.fn()}
    >
      <Form>
        <ImageUploader {...props} />
      </Form>
    </Formik>
  );
};

describe("ImageUploader Component", () => {
  test("displays default image when no image is uploaded", () => {
    renderWithFormik({ onSelect: jest.fn(), uploadedUrl: null });
    const image = screen.getByAltText("Profile");
    expect(image).toHaveAttribute("src", defaultImage);
  });

  test("displays uploaded image when uploadedUrl is provided", () => {
    const mockUploadedUrl =
      "https://firebasestorage.googleapis.com/v0/b/feedback-system-fd636.appspot.com/o/profile-images%2Fprofile.png?alt=media";
    renderWithFormik({ onSelect: jest.fn(), uploadedUrl: mockUploadedUrl });
    const image = screen.getByAltText("Profile");
    expect(image).toHaveAttribute("src", mockUploadedUrl);
  });

  test("opens preview dialog on file selection", async () => {
    const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
    renderWithFormik({ onSelect: jest.fn(), uploadedUrl: null });

    const fileInput = screen.getByLabelText(/icon-button-file/i);
    await userEvent.upload(fileInput, mockFile);

    const dialogTitle = await screen.findByText("Image Preview");
    expect(dialogTitle).toBeInTheDocument();
  });

  test("calls onSelect with the selected file on clicking Select button", async () => {
    const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
    const onSelectMock = jest.fn();
    renderWithFormik({ onSelect: onSelectMock, uploadedUrl: null });

    const fileInput = screen.getByLabelText(/icon-button-file/i);
    await userEvent.upload(fileInput, mockFile);

    const selectButton = await screen.findByText(/Select/i);
    await userEvent.click(selectButton);

    expect(onSelectMock).toHaveBeenCalledWith(mockFile);
  });

  test("resets preview and does not call onSelect on clicking Cancel button", async () => {
    const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
    const onSelectMock = jest.fn();
    renderWithFormik({ onSelect: onSelectMock, uploadedUrl: null });

    const fileInput = screen.getByLabelText(/icon-button-file/i);
    await userEvent.upload(fileInput, mockFile);

    const cancelButton = await screen.findByText(/Cancel/i);
    await userEvent.click(cancelButton);

    const dialogTitle = screen.queryByText("Image Preview");
    expect(dialogTitle).not.toBeInTheDocument();
    expect(onSelectMock).not.toHaveBeenCalled();
  });
});
