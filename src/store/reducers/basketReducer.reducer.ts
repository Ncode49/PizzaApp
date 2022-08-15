import { createReducer } from "@reduxjs/toolkit";
import { PizzaOrderId } from "../initReduxStore";
import { addedPizzaToBasketAction } from '../../hex/usecases/retrieve-pizza/action';

const initialState: PizzaOrderId[] = [];
export const basketReducer = createReducer<PizzaOrderId[]>(initialState, builder => {
    builder.addCase(addedPizzaToBasketAction, (state, { payload }) => {
        return [...state, { pizzaId: payload.pizzaId, ingredientIds: payload.ingredientIds }]
    });
});