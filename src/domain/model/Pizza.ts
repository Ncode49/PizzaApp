export interface Pizza {
    id: string,
    name: string
    ingredients: Ingredients[
    ]
}

export interface Ingredients {
    id: string,
    name: string,
    price: number
}