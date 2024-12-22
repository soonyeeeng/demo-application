import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from './reducers'
import rootEpic from './epics';


// Create Epic Middleware
const epicMiddleware = createEpicMiddleware();

// Combine reducers (if needed)
// const reducer = combineReducers({
//   rootReducer, // Replace with your reducers
// });

// Create Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

// Run the epic middleware
epicMiddleware.run(rootEpic);

export default store;
