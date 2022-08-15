import { createAction } from "@reduxjs/toolkit";
import { Pizza } from "../../model/Pizza";

export const retrieveAPizzaAction = createAction<{ pizza: null | Pizza }>('pizza/retrieveAPizza')

export const addedIngredientOptionToPizzaAction = createAction<{ pizzaId: string, ingredientId: string }>('pizza/addIngredient')


export const removedIngredientOptionToPizzaAction = createAction<{ pizzaId: string, ingredientId: string }>('pizza/removeIngredient')

export const addedPizzaToBasketAction = createAction<{ pizzaId: string, ingredientIds: Array<string> }>('basket/addPizzaToBasket')

