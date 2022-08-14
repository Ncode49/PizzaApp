import { Pizza } from "./Pizza";

export interface PizzaGateway {
    byId(id: string): Promise<Pizza>
}