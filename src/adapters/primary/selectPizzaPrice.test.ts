import { Pizza } from "../../domain/model/Pizza";
import { addedIngredientOptionToPizzaAction, retrieveAllPizzasAction, retrieveAPizzaAction } from "../../domain/usecases/action";
import { ReduxStore, initReduxStore } from "../../store/initReduxStore";
import { selectPizzaPrice } from "./selectPizzaPrice";

describe("pizza Price", () => {
    it("pizza with tomato", () => {

        let store: ReduxStore;
        store = initReduxStore({});
        const pizza: Pizza = {
            id: "1",
            name: "Fun Pizza",
            ingredients: [{ id: "3", name: "tomato", price: 0.5 },
            { id: "4", name: "feta cheese", price: 1.0 }
            ]
        }
        store.dispatch(retrieveAPizzaAction({ pizza }))
        store.dispatch(addedIngredientOptionToPizzaAction({ pizzaId: "1", ingredientId: "3" }))
        expect(selectPizzaPrice("1")(store.getState())).toEqual(0.75)





    })

})
export { }