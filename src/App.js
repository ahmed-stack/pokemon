import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

// CSS Imports
import "bootstrap/dist/css/bootstrap.min.css";

// Pages Import
import PokemonPage from "pages/pokemon";

// Local Imports
import initializeStore from "store/configureStore";
import Layout from "components/layout/layout";
import AppLoader from "components/loader/loader";

const store = initializeStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppLoader loadingRef="app.loading">
          <Layout>
            <Routes>
              <Route path="/" index element={<PokemonPage />} />
              <Route path="/favourites" index element={<PokemonPage />} />
            </Routes>
          </Layout>
        </AppLoader>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
