import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Component Imports
import { PokemonBanner, Pokemon } from "components/pokemon";

// Local Imports
import initializeStore from "store/configureStore";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  jest.resetAllMocks();
  cleanup();
});

const store = initializeStore();
const history = createMemoryHistory();

const MockStoreWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        {children}
      </Router>
    </Provider>
  );
};

test("Filter Pokemon By Search", async () => {
  await act(async () => {
    render(
      <MockStoreWrapper>
        <PokemonBanner />
        <Pokemon />
      </MockStoreWrapper>
    );
  });

  expect(screen.getAllByTestId("pokemon-item")).toHaveLength(2);

  expect(screen.getByTestId("input").value).toBe("");

  await act(async () => {
    userEvent.type(screen.getByTestId("input"), "hello");
    await new Promise((r) => setTimeout(r, 650));
  });

  expect(screen.getByTestId("input").value).toBe("hello");

  expect(screen.queryAllByTestId("pokemon-item")).toHaveLength(0);

  await act(async () => {
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "" },
    });
    userEvent.type(screen.getByTestId("input"), "pikachu");
    await new Promise((r) => setTimeout(r, 650));
  });

  expect(screen.getByTestId("input").value).toBe("pikachu");

  expect(screen.queryAllByTestId("pokemon-item")).toHaveLength(1);
});
