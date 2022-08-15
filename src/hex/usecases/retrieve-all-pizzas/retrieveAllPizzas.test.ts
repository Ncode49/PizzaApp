import { InmemoryPizzaGateway } from "../../../adapters/secondary/inmemoryPizzaGateway"
import { ReduxStore, initReduxStore, PizzaOptions } from "../../../store/initReduxStore"
import { retrieveAllPizzas } from "./retrieveAllPizza"

describe("pizzas list retrieval", () => {

    let store: ReduxStore
    let pizzaGateway: InmemoryPizzaGateway
    beforeEach(() => {
        pizzaGateway = new InmemoryPizzaGateway()
        store = initReduxStore({ pizzaGateway })
    })
    it("should not retrieve any pizza if there is no available", async () => {
        await _retrieveAllPizzas()
        expectedPizzaList([])
    })

    it("should retrieve a pizza when no one is available", async () => {
        const pizzaList = [
            {
                id: "1",
                name: "Fun Pizza",
                ingredients: [{ id: "3", name: "tomato", price: 0.5 },
                { id: "4", name: "feta cheese", price: 1.0 }
                ]
            }, {
                id: "2", name: "Super Mushroom Pizza",
                ingredients: [{ id: "3", name: "tomato", price: 0.5 },
                { id: "5", name: "bacon", price: 1.0 }]
            }
        ]

        pizzaGateway.pizzas = pizzaList
        await _retrieveAllPizzas()
        expectedPizzaList([
            {
                pizza: {
                    id: "1",
                    name: "Fun Pizza",
                    ingredients: [{ id: "3", name: "tomato", price: 0.5 },
                    { id: "4", name: "feta cheese", price: 1.0 }
                    ]
                },
                ingredientsOrder: []
            }, {
                pizza: {
                    id: "2",
                    name: "Super Mushroom Pizza",
                    ingredients: [{ id: "3", name: "tomato", price: 0.5 },
                    { id: "5", name: "bacon", price: 1.0 }]
                },
                ingredientsOrder: []

            }
        ])
    })


    const _retrieveAllPizzas = () => store.dispatch(retrieveAllPizzas())
    const expectedPizzaList = (pizzaOptionsList: PizzaOptions[]) => {
        expect(store.getState()).toEqual({
            pizzaOptionsList: pizzaOptionsList,
            basket: []
        })
    }
})