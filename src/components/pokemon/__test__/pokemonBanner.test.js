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
import axios from "axios";

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

describe("Pokemon Banner Component Test", () => {
  test("Pokemon Banner Initial API Calls", async () => {
    await act(() => {
      render(
        <MockStoreWrapper>
          <PokemonBanner />
        </MockStoreWrapper>
      );
    });

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith(
      "https://pokeapi.co/api/v2/generation/",
      {}
    );
  });

  test("Render Generation List", async () => {
    await act(() => {
      render(
        <MockStoreWrapper>
          <PokemonBanner />
        </MockStoreWrapper>
      );
    });
    const generations = screen.getAllByTestId("option-items");
    expect(generations).toHaveLength(2);
  });
});
