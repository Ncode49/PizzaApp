import { createAction } from "@reduxjs/toolkit";
import { Pizza } from "../../model/Pizza";

export const retrieveAPizzaAction = createAction<{ pizza: null | Pizza }>('pizza/retrieveAPizza')

export const addedIngredientOptionToPizzaAction = createAction<{ pizzaId: string, ingredientId: string }>('pizza/addIngredient')