import { initReduxStore, ReduxStore } from "../../../store/initReduxStore"
import { retrieveAPizzaAction } from '../retrieve-pizza/action';
import { Pizza } from '../../model/Pizza';
import { addIngredientOptionToPizza } from "./addIngredientOptionToPizza";

describe("add pizzaOptions", () => {
    let store: ReduxStore
    beforeEach(() => {
        store = initReduxStore({})
    })
    it("should add an option ingredient to a pizza", async () => {
        const pizza: Pizza = {
            id: "1",
            name: "Fun Pizza",
            ingredients: [{ id: "3", name: "tomato", price: 0.5 },
            { id: "4", name: "feta cheese", price: 1.0 }
            ]
        }
        store.dispatch(retrieveAPizzaAction({ pizza }))
        await store.dispatch(addIngredientOptionToPizza("1", "3"))

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
                    ingredientsOrder: ["3"]
                }
            ]
        })
    })



})