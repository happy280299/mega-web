import { combineReducers } from 'redux';
// slices
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/user';

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

export const productPersistConfig = {
  key: 'product',
  storage,
  keyPrefix: 'redux-',
  whitelist: ['sortBy', 'checkout'],
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
