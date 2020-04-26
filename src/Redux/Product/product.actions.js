import { createAction } from "redux-act";
// import { FETCH_USERS, ADDING_USERS, EDIT_USERS } from "./types";


export const addToCart = createAction("add to cart");
export const removeFromCart = createAction("remove from cart");
export const changeCountInCart = createAction("change count in cart");
