import { AppThunk } from "../../../store/initReduxStore"
import { addedPizzaToBasketAction } from "../action"

export const addPizzaToBasket = (pizzaId: string): AppThunk => async (dispatch, getState, { }) => {
    let ingredientIds = getState().pizzaOptionsList.filter(pizza => pizza.pizza.id == pizzaId)[0].ingredientsOrder
    dispatch(addedPizzaToBasketAction({
        pizzaId,
        ingredientIds
    }))
}