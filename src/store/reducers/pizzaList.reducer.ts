import { createReducer } from "@reduxjs/toolkit";
import { retrieveAPizzaAction, addedIngredientOptionToPizzaAction, removedIngredientOptionToPizzaAction, retrieveAllPizzasAction } from '../../domain/usecases/action';
import { PizzaOptions } from '../initReduxStore';


const initialState: PizzaOptions[] = [];

export const pizzaListReducer = createReducer<PizzaOptions[]>(initialState, builder => {
    builder.addCase(retrieveAPizzaAction, (state, { payload }) => {

        if (payload.pizza) {
            const pizzaOptions: PizzaOptions =
            {
                pizza: payload.pizza,
                ingredientsOrder: []
            }
            return [...state, pizzaOptions]
        }
        return state
    });
    builder.addCase(retrieveAllPizzasAction, (state, { payload }) => {
        const pizzaOptionsList = payload.pizzas.map(p => { return { pizza: p, ingredientsOrder: [] } })
        return [...pizzaOptionsList]
    });

    builder.addCase(addedIngredientOptionToPizzaAction, (state, { payload }) => {
        return state.map(order => order.pizza.id == payload.pizzaId ? { ...order, ingredientsOrder: [...order.ingredientsOrder, payload.ingredientId] } : order)

    });

    builder.addCase(removedIngredientOptionToPizzaAction, (state, { payload }) => {
        return state.map(order => order.pizza.id == payload.pizzaId ? { ...order, ingredientsOrder: order.ingredientsOrder.filter(id => id !== payload.ingredientId) } : order)
    });
});