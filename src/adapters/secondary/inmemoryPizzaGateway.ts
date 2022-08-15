import { Pizza } from "../../hex/model/Pizza"
import { PizzaGateway } from "../../hex/model/pizzaGateway"

export class InmemoryPizzaGateway implements PizzaGateway {

    private _pizzas: Array<Pizza> = []

    set pizzas(pizzas: Array<Pizza>) {
        this._pizzas = pizzas
    }

    byId(id: string) {
        return Promise.resolve(this._pizzas.filter(pizza => pizza.id == id)[0])
    }

    all(): Promise<Pizza[]> {
        return Promise.resolve(this._pizzas)
    }
}