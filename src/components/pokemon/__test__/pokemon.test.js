import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import axios from "axios";

// Component Imports
import { Pokemon } from "components/pokemon";

// Local Imports
import initializeStore from "store/configureStore";

afterEach(() => {
  jest.resetAllMocks();
});

const store = initializeStore();
const history = createMemoryHistory();

const MockPokemonComponent = () => {
  return (
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <Pokemon />
      </Router>
    </Provider>
  );
};

describe("Pokemon Component Test", () => {
  test("Pokemon Initial API Calls", async () => {
    await act(() => {
      render(<MockPokemonComponent />);
    });

    expect(axios.get).toBeCalledTimes(3);
    expect(axios.get).toBeCalledWith("https://pokeapi.co/api/v2/pokemon/", {});
    expect(axios.get).toBeCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu/",
      {}
    );
  });

  test("Render Pokemon List", async () => {
    await act(() => {
      render(<MockPokemonComponent />);
    });
    const pokemons = screen.getAllByTestId("pokemon-item");
    expect(pokemons).toHaveLength(2);
  });
});
