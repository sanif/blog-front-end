/**
 * Redux middle ware for reducing boilerplate for api calls
 * @author Sanif SS
 * @param {*} { dispatch, getState }
 * @returns
 */
function callApiMiddleware({ dispatch, getState }) {
  return next => action => {
    const { actionType, callAPI, shouldCallAPI = () => true, payload = {}, stateObject, isTransient = false } = action;

    if (!actionType) {
      // Normal action: pass it on
      return next(action);
    }

    if (typeof actionType !== "string") {
      throw new Error("Expected string for actionType.");
    }

    if (typeof callAPI !== "function") {
      throw new Error("Expected callAPI to be a function.");
    }

    if (typeof stateObject != "string") {
      throw new Error("Expected stateObject to be a string for holding the api state.");
    }

    if (!shouldCallAPI(getState())) {
      return;
    }

    dispatch({
      payload: {
        [stateObject]: {
          loading: true,
          data: null,
          error: null
        },
        status: "request"
      },
      type: actionType
    });

    const dispatchClear = () => {
      dispatch({
        payload: {
          [stateObject]: {
            loading: false,
            data: null,
            error: null
          },
          status: "clear"
        },
        type: actionType
      });
    };

    return callAPI().then(
      response => {
        dispatch({
          payload: {
            [stateObject]: {
              loading: false,
              data: response,
              error: null
            },
            status: "success"
          },
          type: actionType
        });
        if (isTransient) {
          dispatchClear();
        }
      },
      error => {
        dispatch({
          payload: {
            [stateObject]: {
              loading: false,
              data: null,
              error: error
            },
            status: "failure"
          },
          type: actionType
        });
        if (isTransient) {
          dispatchClear();
        }
      }
    );
  };
}
export default callApiMiddleware;
