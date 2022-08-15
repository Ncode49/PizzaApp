import { useState } from "react";
import { useDispatch } from "react-redux";
import { Ingredients } from "../../hex/model/Pizza";
import { addIngredientOptionToPizza } from "../../hex/usecases/add-ingredient-to-pizza/addIngredientOptionToPizza";
import { removeIngredientOptionFromPizza } from "../../hex/usecases/remove-ingredient-from-pizza.test.ts/removeIngredientOptionFromPizza";
import { AppDispatch } from "../../store/initReduxStore";

export const IngredientOption = ({
  pizzaId,
  ingredientOption,
}: {
  pizzaId: string;
  ingredientOption: Ingredients;
}) => {
  const [checked, setChecked] = useState(false);
  const dispatch: AppDispatch = useDispatch<AppDispatch>();

  const handleChange = () => {
    setChecked(!checked);
    checked
      ? dispatch(removeIngredientOptionFromPizza(pizzaId, ingredientOption.id))
      : dispatch(addIngredientOptionToPizza(pizzaId, ingredientOption.id));
  };
  return (
    <>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <label>
        {ingredientOption.name} - {ingredientOption.price} euros
      </label>
    </>
  );
};
