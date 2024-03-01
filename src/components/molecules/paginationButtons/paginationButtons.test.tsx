import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import PaginationButtons from "./PaginationButtons";
import { RootState } from "../../../redux/store";

const initialState: Partial<RootState> = {
  currentPage: {
    page: 0,
  },
};
const mockStore = configureStore();

describe("PaginationButtons", () => {
  it("render correctly with initial state", () => {
    const store = mockStore(initialState);
    const { getByAltText } = render(
      <Provider store={store}>
        <PaginationButtons limit={24} />
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByAltText("Back Arrow")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByAltText("Forward Arrow")).toBeInTheDocument();
  });

  it("dispatch setPage when next page button clicked", () => {
    const store = mockStore(initialState);
    const { getByAltText } = render(
      <Provider store={store}>
        <PaginationButtons limit={24} />
      </Provider>
    );

    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByAltText("Forward Arrow"));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: "currentPage/setPage", payload: 1 });
  });
});
