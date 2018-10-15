// imports important items for store
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const dev = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const middleware =  [thunk];

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(
        ...middleware  // Saving done here
    ))(createStore)

const store = createStoreWithMiddleware(
	reducers,
);

export default store;