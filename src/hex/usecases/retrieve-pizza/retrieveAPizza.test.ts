import { InmemoryPizzaGateway } from '../../../adapters/secondary/inmemoryPizzaGateway';
import { ReduxStore, initReduxStore } from '../../../store/initReduxStore';
import { retrieveAPizza } from './retrieveAPizza';
describe("pizzas list", () => {
    it("should not retrieve any pizza if there is no available", async () => {

        let store: ReduxStore
        let pizzaGateway: InmemoryPizzaGateway
        pizzaGateway = new InmemoryPizzaGateway()
        store = initReduxStore({ pizzaGateway })

        store.dispatch(retrieveAPizza("1"))
        expect(store.getState()).toEqual({ pizzaList: [] })
    })

    it("should retrieve a pizza", async () => {
        let store: ReduxStore
        let pizzaGateway: InmemoryPizzaGateway
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


        pizzaGateway = new InmemoryPizzaGateway()
        pizzaGateway.pizzas = pizzaList
        store = initReduxStore({ pizzaGateway })

        await store.dispatch(retrieveAPizza("1"))
        expect(store.getState()).toEqual({
            pizzaList: [
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
        })



    })
})