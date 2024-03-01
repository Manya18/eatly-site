import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentsBlock from "./CommentsBlock";
import { addComment } from "../../../services/addComment";
import "@testing-library/jest-dom";

jest.mock("../../../services/addComment");

describe("CommentsBlock", () => {
  beforeEach(() => {
    (addComment as jest.Mock).mockClear();
  });

  const initialProps = {
    comments: [
      {
        id: 1,
        body: "Test comment",
        postId: 1,
        user: { id: 1, username: "User 1" },
      },
    ],
  };

  it("renders with initial comments", async () => {
    render(<CommentsBlock {...initialProps} />);
    expect(await screen.findByText("Test comment")).toBeInTheDocument();
  });

  it("updates input on user typing", async () => {
    render(<CommentsBlock {...initialProps} />);
    const input = screen.getByPlaceholderText("ENTER YOUR COMMENT");
    await userEvent.type(input, "New comment");
    expect(input).toHaveValue("New comment");
  });

  it('adds a new comment when "Send" button is clicked', async () => {
    const newComment = {
      id: 2,
      body: "New comment",
      postId: 1,
      user: { id: 2, username: "User 2" },
    };
    (addComment as jest.Mock).mockResolvedValue(newComment);

    render(<CommentsBlock {...initialProps} />);

    await userEvent.type(
      screen.getByPlaceholderText("ENTER YOUR COMMENT"),
      "New comment"
    );
    fireEvent.click(screen.getByText("Send"));

    // Дождаться, пока новый комментарий не отобразится в DOM
    expect(await screen.findByText("New comment")).toBeInTheDocument();
    // Проверить, был ли вызов функции addComment с ожидаемыми аргументами
    expect(addComment).toHaveBeenCalledWith("New comment", 1, 5);
  });
});
