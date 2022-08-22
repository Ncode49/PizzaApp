import { Pizza } from "../../domain/model/Pizza";
import { addedPizzaToBasketAction, retrieveAPizzaAction } from "../../domain/usecases/action";
import { ReduxStore, initReduxStore } from "../../store/initReduxStore";
import { selectPizzasBasket } from "./selectPizzasBasket";

describe("pizza basket", () => {
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
        store.dispatch(addedPizzaToBasketAction({ pizzaId: "1", ingredientIds: ["3"] }))

        expect(selectPizzasBasket(store.getState())).toEqual([{
            id: "1",
            name: "Fun Pizza",
            ingredientsChosen: [{ id: "3", name: "tomato" },
            ]
        }])





    })
    it("pizza with tomato and fetaCheese", () => {

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
        store.dispatch(addedPizzaToBasketAction({ pizzaId: "1", ingredientIds: ["3", "4"] }))
        store.dispatch(addedPizzaToBasketAction({ pizzaId: "1", ingredientIds: ["3", "4"] }))
        expect(selectPizzasBasket(store.getState())).toEqual([{
            id: "1",
            name: "Fun Pizza",
            ingredientsChosen: [{ id: "3", name: "tomato" }, { id: "4", name: "feta cheese" }
            ]
        }, {
            id: "1",
            name: "Fun Pizza",
            ingredientsChosen: [{ id: "3", name: "tomato" }, { id: "4", name: "feta cheese" }
            ]
        }])
    })

})