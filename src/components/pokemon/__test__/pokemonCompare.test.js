import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Component Imports
import { Pokemon, PokemonCompare } from "components/pokemon";

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
        <PokemonCompare />
      </Router>
    </Provider>
  );
};

describe("Pokemon Compare Component Test", () => {
  test("Open Pokemon Compare Modal", async () => {
    await act(() => {
      render(<MockPokemonComponent />);
    });

    expect(screen.queryByTestId("pokemon-compare")).toBeNull();

    const button1 = screen.getByTestId("compare-pokemon-0");
    const button2 = screen.getByTestId("compare-pokemon-1");

    fireEvent.click(button1);

    expect(screen.queryByText("SELECTED")).toBeInTheDocument();

    expect(screen.queryByTestId("pokemon-compare")).toBeNull()

    fireEvent.click(button2);

    expect(screen.queryByTestId("pokemon-compare")).toBeInTheDocument();
  });
});
