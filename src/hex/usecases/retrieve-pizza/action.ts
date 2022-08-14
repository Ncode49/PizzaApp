import { createAction } from "@reduxjs/toolkit";
import { Pizza } from "../../model/Pizza";

export const retrieveAPizzaAction = createAction<{ pizza: null | Pizza }>('pizza/retrieveAPizza')