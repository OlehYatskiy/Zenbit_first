import { compose,
	createStore,
	combineReducers,
	applyMiddleware
} from "redux";
import product from "./Product/productReducer";

const rootReducer = combineReducers({ product });

const store = createStore(rootReducer,
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default store;
