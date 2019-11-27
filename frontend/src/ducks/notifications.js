export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';


export const addNotification = (config) => dispatch => {
  const {
    duration = null,
    color = 'yellow',
    text = '',
  } = config;

  const dateCreated = new Date();
  const id = dateCreated.getTime();

  dispatch({
    type: ADD_NOTIFICATION,
    payload: {
      id,
      dateCreated,
      duration,
      color,
      text,
      ...config,
    }
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
        ids: [payload.id, ...state.ids],
        entities: {
          ...state.entities,
          [payload.id]: payload,
        },
      }
    }
    case REMOVE_NOTIFICATION: {
      if (!state.entities[payload]) return state;

      const updatedEntities = { ...state.entities };

      delete updatedEntities[payload];

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