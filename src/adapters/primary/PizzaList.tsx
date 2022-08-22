import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveAllPizzas } from "../../domain/usecases/retrieve-all-pizzas/retrieveAllPizza";
import { AppDispatch, AppState } from "../../store/initReduxStore";
import { Pizza } from "./Pizza";

export const PizzaList = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const pizzaList = useSelector((state: AppState) => state.pizzaOptionsList);
  useEffect(() => {
    dispatch(retrieveAllPizzas());
  }, [dispatch]);
  return (
    <>
      <h2>Liste des Pizza</h2>
      <ul>
        {pizzaList.map((pizzaOption) => (
          <li>
            <Pizza {...pizzaOption} />
          </li>
        ))}
      </ul>
    </>
  );
};
