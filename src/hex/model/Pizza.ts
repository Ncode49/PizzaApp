export interface Pizza {
    id: string,
    name: string
    ingredients: Ingredients[
    ]
}

interface Ingredients {
    id: string,
    name: string,
    price: number
}