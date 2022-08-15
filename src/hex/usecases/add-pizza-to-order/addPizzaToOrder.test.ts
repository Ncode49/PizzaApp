import { initReduxStore, ReduxStore } from "../../../store/initReduxStore"
import { addedIngredientOptionToPizzaAction, retrieveAPizzaAction } from '../retrieve-a-pizza/action';
import { Pizza } from '../../model/Pizza';
import { addPizzaToBasket } from "./addPizzaToBasket";

describe("add pizza to basket", () => {
    let store: ReduxStore
    beforeEach(() => {
        store = initReduxStore({})
    })
    it("should add a pizza to basket", async () => {
        const pizza: Pizza = {
            id: "1",
            name: "Fun Pizza",
            ingredients: [{ id: "3", name: "tomato", price: 0.5 },
            { id: "4", name: "feta cheese", price: 1.0 }
            ]
        }
        store.dispatch(retrieveAPizzaAction({ pizza }))
        store.dispatch(addedIngredientOptionToPizzaAction({ pizzaId: "1", ingredientId: "3" }))
        store.dispatch(addPizzaToBasket("1"))
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
            ],
            basket: [{ pizzaId: "1", ingredientIds: ["3"] }]
        })
    })



})