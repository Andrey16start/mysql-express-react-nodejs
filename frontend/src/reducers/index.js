import { combineReducers } from 'redux';

import authReducer from '../ducks/auth';
import notificationsReducer from '../ducks/notifications';


export default combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
});