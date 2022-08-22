import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AppDispatch,
  AppState,
  PizzaOptions,
} from "../../store/initReduxStore";
import { retrieveAllPizzas } from "../../domain/usecases/retrieve-all-pizzas/retrieveAllPizza";
import { useSelector } from "react-redux";
import { Ingredients } from "../../domain/model/Pizza";
import { addIngredientOptionToPizza } from "../../domain/usecases/add-ingredient-to-pizza/addIngredientOptionToPizza";
import { removeIngredientOptionFromPizza } from "../../domain/usecases/remove-ingredient-from-pizza.test.ts/removeIngredientOptionFromPizza";
import { addPizzaToBasket } from "../../domain/usecases/add-pizza-to-order/addPizzaToBasket";
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
