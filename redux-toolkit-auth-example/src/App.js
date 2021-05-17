import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./client/navbar/components/Navbar";
import AllProductsPage from "./client/products/pages/AllProductsPage";

import "./App.css";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
         <Navbar />
        <Switch>
          <Route path="/">
            <AllProductsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
