const logAction = action => {
  let statusColor = "orange";
  if (action.payload.status === "success") {
    statusColor = "green";
  } else if (action.payload.status === "failure") {
    statusColor = "red";
  } else if (action.payload.status === "clear") {
    statusColor = "purple";
  }
  console.log(`%c ${action.type} - ${action.payload.status}`, `color: ${statusColor}; font-weight:bold; font-size:14px;`, action.payload);
};

/**
 * Utility function for service reducers. Use along with callApiMiddleWare.js
 * @author Sanif SS
 *
 */
const createApiReducer = (initialState, actionTypes = []) => {
  return function reducer(state = initialState, action) {
    if (actionTypes.includes(action.type)) {
      logAction(action);
      const { payload } = action;
      const { status, ...data } = payload;

      const newState = {
        ...state,
        ...data
      };

      return newState;
    } else {
      return state;
    }
  };
};

export default createApiReducer;
