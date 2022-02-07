import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById("root")
);