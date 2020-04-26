import { createReducer } from "redux-act";

import * as actions from "./product.actions";


const initialState = {
	products: [
		{
			id: 1,
			name: 'Phone L1',
			price: 220,
			image: 'https://asset.mediaw.it/wcsstore/MMCatalogAssetStore/asset/images/10/29/102910_5.jpg'
		},
		{
			id: 2,
			name: 'Phone L2',
			price: 330,
			image: 'https://www.three.co.uk/static/images/device_pages/MobileVersion/Samsung/Galaxy_S10_Plus/Prism_White/carousel/4.jpg'
		},
		{
			id: 3,
			name: 'Phone L3',
			price: 380,
			image: 'https://www.three.co.uk/static/images/device_pages/MobileVersion/Samsung/Galaxy_S10_Plus/Prism_White/carousel/4.jpg'
		}
	],
	cart: []
};

const reducer = {
	[actions.addToCart]: (state, cartItem) => ({
		...state,
		cart: [...state.cart, {
			...cartItem,
			count: 1
		}]
	}),
	[actions.removeFromCart]: (state, index) => ({
		...state,
		cart: index === undefined ? [] :
			state.cart.slice(null, index)
				.concat(state.cart.slice(index + 1))
	}),
	[actions.changeCountInCart]: (state, {arrIndex, value}) => ({
		...state,
		cart: state.cart.map((item, index) => {
			if (index !== arrIndex) {
				return item;
			}
			return {
				...item,
				count: value
			}
		})
	})
}

// const reducer = (state = initialState, action) => {
// 	return state;
// }

//export default reducer;
 export default createReducer(reducer, initialState);
