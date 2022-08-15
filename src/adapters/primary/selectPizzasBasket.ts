import { AppState } from '../../store/initReduxStore';
export const selectPizzasBasket = (appState: AppState) => {
    function getDataPizza(index: number) {
        const pizzaOrderIds = appState.basket[index]
        const ingredients = appState.basket[index].ingredientIds
        const pizzaAssociated = appState.pizzaOptionsList.filter(p => p.pizza.id == pizzaOrderIds.pizzaId)[0]
        const ingredientAssociated = pizzaAssociated.pizza.ingredients.filter(i => ingredients.indexOf(i.id) > -1).map(pizza => { return { id: pizza.id, name: pizza.name } })

        return {
            id: pizzaAssociated.pizza.id,
            name: pizzaAssociated.pizza.name,
            ingredientsChosen: ingredientAssociated
        }
    }

    let total = []
    for (let i = 0; i < appState.basket.length; i++) {
        total.push(getDataPizza(i))
    }
    return total

}
