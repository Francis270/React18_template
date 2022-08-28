import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "./components";
import store from "./store/index";

import "./styles/Style.scss";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);