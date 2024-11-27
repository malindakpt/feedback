import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ImageUploader from "./imageUploader";
import defaultImage from "../../assets/defaultImage.jpg"; // Adjust path to default image if needed

describe("ImageUploader Component", () => {
  test("displays default image when no image is uploaded", () => {
    render(<ImageUploader onSelect={() => {}} uploadedUrl={null} />);
    const image = screen.getByAltText("Profile");
    expect(image).toHaveAttribute("src", defaultImage);
  });

  test("displays uploaded image when uploadedUrl is provided", () => {
    const mockUploadedUrl = "http://example.com/uploaded-image.jpg";
    render(<ImageUploader onSelect={() => {}} uploadedUrl={mockUploadedUrl} />);
    const image = screen.getByAltText("Profile");
    expect(image).toHaveAttribute("src", mockUploadedUrl);
  });

  test("opens preview dialog on file selection", async () => {
    const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
    render(<ImageUploader onSelect={() => {}} uploadedUrl={null} />);

    const fileInput = screen.getByLabelText(/icon-button-file/i);
    await userEvent.upload(fileInput, mockFile);

    const dialogTitle = await screen.findByText("Image Preview");
    expect(dialogTitle).toBeInTheDocument();
  });

  test("calls onSelect with the selected file on clicking Select button", async () => {
    const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
    const onSelectMock = jest.fn();
    render(<ImageUploader onSelect={onSelectMock} uploadedUrl={null} />);

    const fileInput = screen.getByLabelText(/icon-button-file/i);
    await userEvent.upload(fileInput, mockFile);

    const selectButton = await screen.findByText(/Select/i);
    await userEvent.click(selectButton);

    expect(onSelectMock).toHaveBeenCalledWith(mockFile);
  });

  test("resets preview and does not call onSelect on clicking Cancel button", async () => {
    const mockFile = new File(["dummy content"], "example.png", { type: "image/png" });
    const onSelectMock = jest.fn();
    render(<ImageUploader onSelect={onSelectMock} uploadedUrl={null} />);

    const fileInput = screen.getByLabelText(/icon-button-file/i);
    await userEvent.upload(fileInput, mockFile);

    const cancelButton = await screen.findByText(/Cancel/i);
    await userEvent.click(cancelButton);

    const dialogTitle = screen.queryByText("Image Preview");
    expect(dialogTitle).not.toBeInTheDocument();
    expect(onSelectMock).not.toHaveBeenCalled();
  });
});
