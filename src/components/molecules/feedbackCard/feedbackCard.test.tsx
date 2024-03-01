import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FeedbackCard from "./FeedbackCard"; 
import { ICommentsProps } from "../../../types/APItypes/CommentsProps";

describe("FeedbackCard", () => {
  it("renders the feedback data correctly", () => {
    const testData: ICommentsProps = {
      body: "test body",
      id: 11,
      postId: 1,
      user: {
        id: 1,
        username: "testuser",
      },
    };

    render(<FeedbackCard data={testData} />);

    expect(screen.getByText("@testuser")).toBeInTheDocument();
    expect(screen.getByText("test body")).toBeInTheDocument();
    expect(screen.getByAltText("quotation marks")).toBeInTheDocument();
  });
});
