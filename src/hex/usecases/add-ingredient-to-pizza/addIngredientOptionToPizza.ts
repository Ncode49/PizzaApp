import { AppThunk } from "../../../store/initReduxStore"
import { addedIngredientOptionToPizzaAction } from "../retrieve-pizza/action"

export const addIngredientOptionToPizza = (pizzaId: string, ingredientId: string): AppThunk => async (dispatch, getState, { }) => {
    dispatch(addedIngredientOptionToPizzaAction({ pizzaId, ingredientId }))
}