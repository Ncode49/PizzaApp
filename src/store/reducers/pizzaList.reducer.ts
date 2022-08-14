import { createReducer } from "@reduxjs/toolkit";
import { retrieveAPizzaAction } from '../../hex/usecases/retrieve-pizza/action';
import { PizzaOptions } from '../initReduxStore';


const initialState: PizzaOptions[] = [];

export const pizzaListReducer = createReducer<PizzaOptions[]>(initialState, builder => {
    builder.addCase(retrieveAPizzaAction, (state, { payload }) => {

        if (state && payload.pizza) {
            const pizzaOptions: PizzaOptions =
            {
                pizza: payload.pizza,
                ingredientsOrder: []
            }
            return [...state, pizzaOptions]
        }
        return state
    });
});