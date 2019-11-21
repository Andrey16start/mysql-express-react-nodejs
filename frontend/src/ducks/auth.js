import API from '../api/api';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGOUT_USER = 'LOGOUT_USER';


export const loginUser = (values, history) => dispatch => {
  dispatch({ type: LOGIN_PENDING });

  API.loginUser(values)
    .then(res => {
      if (2) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });

        history.push('/');
      }
      else {
        dispatch({
          type: LOGIN_REJECTED,
          payload: res.data.message
        })
      }
    })
    .catch(err => {
      dispatch({
        type: LOGIN_REJECTED,
        payload: err
      })
    })
}


export const logoutUser = (history) => dispatch => {
  API.logoutUser()
    .then(res => {
      dispatch({
        type: LOGOUT_USER
      })
    })
    .catch(err => console.log(err));

  history
    ? history.push('/login')
    : window.location = '/login';
};

export const initApp = () => async dispatch => {

};


const initialState = {
  pending: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING: {
      return {
        ...state,
        pending: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        pending: false,
      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: {},
      }
    }
    case LOGIN_REJECTED: {
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}