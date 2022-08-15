import { ReduxStore, initReduxStore } from "../../../store/initReduxStore"
import { Pizza } from "../../model/Pizza"
import { retrieveAPizzaAction, addedIngredientOptionToPizzaAction } from "../retrieve-a-pizza/action"
import { removeIngredientOptionFromPizza } from "./removeIngredientOptionFromPizza"

describe("remove ingredient pizzaOptions", () => {
    let store: ReduxStore
    beforeEach(() => {
        store = initReduxStore({})
    })
    it("should remove an option ingredient to a pizza", async () => {
        const pizza: Pizza = {
            id: "1",
            name: "Fun Pizza",
            ingredients: [{ id: "3", name: "tomato", price: 0.5 },
            { id: "4", name: "feta cheese", price: 1.0 }
            ]
        }
        store.dispatch(retrieveAPizzaAction({ pizza }))
        store.dispatch(addedIngredientOptionToPizzaAction({ pizzaId: "1", ingredientId: "3" }))
        await store.dispatch(removeIngredientOptionFromPizza("1", "3"))
        expect(store.getState()).toEqual({
            pizzaOptionsList: [
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
            ,
            basket: []
        })
    })



})