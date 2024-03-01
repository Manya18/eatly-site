import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FAQCard from "./FAQCard";

describe("FAQCard Component", () => {
  it("toggle answer display on button click", () => {
    const question = "Test Question?";
    const answer = "Test Answer.";

    render(<FAQCard question={question} answer={answer} />);

    expect(screen.queryByText(answer)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(answer)).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("-");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByText(answer)).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("+");
  });
});
