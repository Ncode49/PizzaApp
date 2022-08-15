import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { InmemoryPizzaGateway } from "./adapters/secondary/inmemoryPizzaGateway";
import { initReduxStore } from "./store/initReduxStore";

const pizzaGateway = new InmemoryPizzaGateway();
pizzaGateway.pizzas = [
  {
    id: "1",
    name: "Fun Pizza",
    ingredients: [
      { id: "aza", name: "tomato", price: 0.5 },
      { id: "abc", name: "sliced mushrooms", price: 0.5 },
      { id: "4", name: "feta cheese", price: 1.0 },
      { id: "def", name: "sausages", price: 1.0 },
      { id: "ghi", name: "sliced onion", price: 0.5 },
      { id: "klm", name: "mozzarella cheese", price: 0.5 },
      { id: "nom", name: "oregano", price: 1.0 },
    ],
  },
  {
    id: "2",
    name: "Super Mushroom Pizza",
    ingredients: [
      { id: "aza", name: "tomato", price: 0.5 },
      { id: "dfd", name: "bacon", price: 1 },
      { id: "klm", name: "mozzarella cheese", price: 0.5 },
      { id: "abc", name: "sliced mushrooms", price: 0.5 },
      { id: "nom", name: "oregano", price: 1.0 },
    ],
  },
];
const store = initReduxStore({ pizzaGateway });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// declare provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
