import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const enhancer = compose(applyMiddleware(thunk));

export default createStore(rootReducer, enhancer);