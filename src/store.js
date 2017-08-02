//redux functions for applying middleware and creating the store
import {applyMiddleware,createStore} from "redux";
//import { browserHistory } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';

//Middleware used in Redux framework.
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

//Reducers that will be used on the store.
import reducers from "./reducers";

//History for router
//export const history = syncHistoryWithStore(browserHistory, store);


//Applies middleware in order to log and check communication. May not need all
//of these. Look into removing some. Or add our own.
const middleware = applyMiddleware(promise(),thunk,createLogger());

//Exports store with imported reducers and middleware.
const store = createStore(reducers,middleware);

export default store;
