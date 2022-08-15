import { AppThunk } from "../../../store/initReduxStore"
import { retrieveAllPizzasAction } from "../retrieve-a-pizza/action"

export const retrieveAllPizzas = (): AppThunk => async (dispatch, getState, { pizzaGateway }) => {
    const pizzas = await pizzaGateway.all()
    dispatch(retrieveAllPizzasAction({ pizzas: pizzas }))

}