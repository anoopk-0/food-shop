import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middleware = composeWithDevTools(applyMiddleware());

const store = createStore(rootReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
