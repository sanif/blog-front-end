import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import callApiMiddleware from "utils/callApiMiddleware";

function configureStore(initialState) {
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument

    thunk,
    callApiMiddleware
  ];

  return createStore(
    rootReducer(), // root reducer with router state
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

export default configureStore;
