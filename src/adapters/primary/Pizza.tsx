import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppDispatch,
  AppState,
  PizzaOptions,
} from "../../store/initReduxStore";
import { retrieveAllPizzas } from "../../hex/usecases/retrieve-all-pizzas/retrieveAllPizza";
import { useSelector } from "react-redux";
import { Ingredients } from "../../hex/model/Pizza";
import { addIngredientOptionToPizza } from "../../hex/usecases/add-ingredient-to-pizza/addIngredientOptionToPizza";
import { removeIngredientOptionFromPizza } from "../../hex/usecases/remove-ingredient-from-pizza.test.ts/removeIngredientOptionFromPizza";
import { addPizzaToBasket } from "../../hex/usecases/add-pizza-to-order/addPizzaToBasket";

export const PizzaList = () => {
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const pizzaList = useSelector((state: AppState) => state.pizzaOptionsList);
  useEffect(() => {
    dispatch(retrieveAllPizzas());
  }, [dispatch]);
  return (
    <ul>
      {pizzaList.map((pizzaOption) => (
        <li>
          <Pizza {...pizzaOption} />
        </li>
      ))}
    </ul>
  );
};

export const Pizza = (pizzaOption: PizzaOptions) => {
  const pizzaId = pizzaOption.pizza.id;
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  return (
    <>
      <h2>{pizzaOption.pizza.name}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPizzaToBasket(pizzaId));
        }}
      >
        {pizzaOption.pizza.ingredients.map((ingredientOption) => (
          <IngredientOption
            ingredientOption={ingredientOption}
            pizzaId={pizzaId}
          />
        ))}
        <button type="submit">Ajouter au panier</button>
      </form>
    </>
  );
};

export const IngredientOption = ({
  pizzaId,
  ingredientOption,
}: {
  pizzaId: string;
  ingredientOption: Ingredients;
}) => {
  const [checked, setChecked] = useState(false);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();
  const totalPricePizza = useSelector((state: AppState) => {
    const pizzaOption = state.pizzaOptionsList.filter(
      (p) => p.pizza.id == pizzaId
    )[0];

    let sum = 0;
    return sum;
  });
  const handleChange = () => {
    setChecked(!checked);
    checked
      ? dispatch(removeIngredientOptionFromPizza(pizzaId, ingredientOption.id))
      : dispatch(addIngredientOptionToPizza(pizzaId, ingredientOption.id));
  };
  return (
    <>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label>
        {ingredientOption.name} - {ingredientOption.price} euros
      </label>
      <p>Price : {totalPricePizza}</p>
    </>
  );
};
