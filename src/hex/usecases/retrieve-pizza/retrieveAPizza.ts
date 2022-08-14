import { AppThunk } from "../../../store/initReduxStore";
import { retrieveAPizzaAction } from "./action";

export const retrieveAPizza = (id: string): AppThunk => async (dispatch, getState, { pizzaGateway }) => {
    const pizza = await pizzaGateway.byId(id)
    dispatch(retrieveAPizzaAction({ pizza: pizza }))

}
