import { Pizza } from "../../hex/model/Pizza"
import { PizzaGateway } from "../../hex/model/pizzaGateway"

export class InmemoryPizzaGateway implements PizzaGateway {

    private _pizzas: Array<Pizza> = []

    set pizzas(pizzas: Array<Pizza>) {
        this._pizzas = pizzas
    }

    byId(id: string) {
        return Promise.resolve(this._pizzas[0])

    }
}