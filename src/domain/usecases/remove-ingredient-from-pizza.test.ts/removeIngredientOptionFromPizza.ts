import { AppThunk } from "../../../store/initReduxStore"
import { removedIngredientOptionToPizzaAction } from "../action"

export const removeIngredientOptionFromPizza = (pizzaId: string, ingredientId: string): AppThunk => async (dispatch, getState, { }) => {
    dispatch(removedIngredientOptionToPizzaAction({ pizzaId, ingredientId }))
}