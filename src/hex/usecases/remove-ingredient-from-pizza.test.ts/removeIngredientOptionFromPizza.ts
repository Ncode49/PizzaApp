import { AppThunk } from "../../../store/initReduxStore"
import { removedIngredientOptionToPizzaAction } from "../retrieve-pizza/action"

export const removeIngredientOptionFromPizza = (pizzaId: string, ingredientId: string): AppThunk => async (dispatch, getState, { }) => {
    dispatch(removedIngredientOptionToPizzaAction({ pizzaId, ingredientId }))
}