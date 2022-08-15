import { Action, AnyAction, configureStore, Store, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit"
import { Pizza } from "../hex/model/Pizza"
import { PizzaGateway } from "../hex/model/pizzaGateway"
import { basketReducer } from "./reducers/basketReducer.reducer"
import { pizzaListReducer } from "./reducers/pizzaList.reducer"


interface Dependencies {
    pizzaGateway: PizzaGateway
}


// used to inject services like gateways
// the reducer automatically create the state of the app
export const initReduxStore = (dependencies: Partial<Dependencies>) => {
    return configureStore({
        reducer: {
            pizzaOptionsList: pizzaListReducer,
            basket: basketReducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: dependencies,
                },
                serializableCheck: false,
            }),
    })

}


export interface AppState {
    pizzaOptionsList: PizzaOptions[]
    basket: PizzaOrderId[]

}

export type PizzaOrderId = {
    pizzaId: string
    ingredientIds: Array<string>
}


export type PizzaOptions = {
    pizza: Pizza,
    ingredientsOrder: Array<string>
}
export type ReduxStore = Store<AppState> & { dispatch: ThunkDispatch<AppState, Dependencies, Action> }

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, Dependencies, AnyAction>;