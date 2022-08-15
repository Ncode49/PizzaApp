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
import { selectPizzaPrice } from "./selectPizzaPrice";
import { IngredientOption } from "./IngredientOption";

export const Pizza = (pizzaOption: PizzaOptions) => {
  const pizzaId = pizzaOption.pizza.id;
  const totalPricePizza = useSelector(selectPizzaPrice(pizzaId));
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
        <p>Price : {totalPricePizza}</p>
        <button type="submit">Ajouter au panier</button>
      </form>
    </>
  );
};
