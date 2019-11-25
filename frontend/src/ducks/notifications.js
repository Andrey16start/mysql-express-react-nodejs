export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';


export const addNotification = (config) => dispatch => {
  dispatch({
    type: ADD_NOTIFICATION,
    payload: 2, // TODO:
  });
};

export const removeNotification = (id) => dispatch => {
  dispatch({
    type: REMOVE_NOTIFICATION,
    payload: id,
  });
};


const initialState = {
  entities: {},
  ids: [],
};


export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTIFICATION: {
      return {
        ...state,
      }
    }
    case REMOVE_NOTIFICATION: {
      const notification = state.entities[payload];

      if (!notification) return state;

      const updatedEntities = { ...state.entities };

      return {
        ...state,
        entities: updatedEntities,
        ids: state.ids.filter(id => id !== payload),
      }
    }
    default:
      return state;
  };
};