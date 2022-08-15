import { useDispatch, useSelector } from "react-redux";
import { selectPizzasBasket } from "./selectPizzasBasket";
export const Basket = () => {
  const pizzaItems = useSelector(selectPizzasBasket);
  return (
    <>
      <h2>Panier</h2>
      {pizzaItems.map((pizzaItem) => (
        <PizzaItem {...pizzaItem} />
      ))}
      <button>Valider le Panier</button>
    </>
  );
};

export const PizzaItem = (pizzaItem: {
  id: string;
  name: string;
  ingredientsChosen: {
    id: string;
    name: string;
  }[];
}) => {
  return (
    <>
      <p>name : {pizzaItem.name}</p>
      <ul>
        {pizzaItem.ingredientsChosen.map((ingredient) => (
          <li>{ingredient.name}</li>
        ))}
      </ul>
    </>
  );
};
