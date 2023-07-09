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
            <div
            className="chatbot"
              dangerouslySetInnerHTML={{
                __html: `
         <iframe src="https://web.powerva.microsoft.com/environments/Default-471dddb3-c5b4-4820-b895-73aa6d7ef7d7/bots/crb7c_azbotPatientAssisstant/webchat?__version__=2" frameborder="0" style="width: 500px; height: 1000px; background-color: white"></iframe>
          `,
              }}
            />
            <Routes>
              <Route path="/" element={<PokemonPage />} />
              <Route path="/favourites" element={<PokemonPage />} />
            </Routes>
          </Layout>
        </AppLoader>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
