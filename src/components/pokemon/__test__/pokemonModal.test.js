import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

// Component Imports
import { Pokemon, PokemonModal } from "components/pokemon";

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
        <PokemonModal />
      </Router>
    </Provider>
  );
};

describe("Pokemon Component Test", () => {
  test("Open Pokemon Details Modal", async () => {
    await act(() => {
      render(<MockPokemonComponent />);
    });

    expect(screen.queryByTestId("pokemon-details")).toBeNull()

    const button = screen.getByTestId("view-details-0");
    fireEvent.click(button);

    expect(screen.queryByTestId("pokemon-details")).toBeInTheDocument();
    
  });
});
