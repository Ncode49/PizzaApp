import { createReducer } from "@reduxjs/toolkit";
import { Pizza } from "../../hex/model/Pizza";
import { retrieveAPizza } from '../../hex/usecases/retrieve-pizza/retrieveAPizza';
import { retrieveAPizzaAction } from '../../hex/usecases/retrieve-pizza/action';
import { PizzaOptions } from '../initReduxStore';


const initialState: null = null;

export const pizzaListReducer = createReducer<null | PizzaOptions[]>(initialState, builder => {
    builder.addCase(retrieveAPizzaAction, (state, { payload }) => {
        if (payload.pizza == null)
            return state
        const pizzaOptions: PizzaOptions[] = [
            {
                pizza: {
                    id: "1",
                    name: "Fun Pizza",
                    ingredients: [{ id: "3", name: "tomato", price: 0.5 },
                    { id: "4", name: "feta cheese", price: 1.0 }
                    ]
                },
                ingredientsOrder: []
            }
        ]
        return pizzaOptions
    });
});