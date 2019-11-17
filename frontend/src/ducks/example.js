export const SOME_ACTION = 'SOME_ACTION';


export const someAction = (action) => dispatch => {
  dispatch({
    type: SOME_ACTION,
    payload: action
  });
};


const initialState = {
  test: 2,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION: {
      return {
        ...action.payload
      }
    }
    default:
      return state;
  }
};