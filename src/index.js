// External imports
import React, { StrictMode } from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Local imports
import App from "./App";
import rootReducer from "./slices/index";

// Assets
import "./index.css";

const store = configureStore({ reducer: rootReducer })

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.querySelector("#root")
)
