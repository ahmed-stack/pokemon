import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Component Imports
import { PokemonBanner, Pokemon } from "components/pokemon";

// Local Imports
import initializeStore from "store/configureStore";

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

test("Filter Pokemon By Generation", async () => {
  await act(async () => {
    render(
      <MockStoreWrapper>
        <PokemonBanner />
        <Pokemon />
      </MockStoreWrapper>
    );
  });

  expect(screen.getAllByTestId("pokemon-item")).toHaveLength(2);

  await act(async () => {
    fireEvent.change(screen.getByTestId("select"), {
      target: { value: "https://pokeapi.co/api/v2/generation/1/" },
    });
  });

  expect(screen.getAllByTestId("pokemon-item")).toHaveLength(3);
});
