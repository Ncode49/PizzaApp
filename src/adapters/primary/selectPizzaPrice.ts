import { AppState } from '../../store/initReduxStore';
export const selectPizzaPrice = (pizzaId: string) => (appState: AppState) => {
    // all the pizza with price
    const pizzaOrder = appState.pizzaOptionsList.filter(p => p.pizza.id === pizzaId)[0]
    let ingredients = pizzaOrder.pizza.ingredients.filter(i => pizzaOrder.ingredientsOrder.indexOf(i.id) > -1)
    return ingredients.reduce((prev, next) => prev + next.price, 0) * 1.5

}

