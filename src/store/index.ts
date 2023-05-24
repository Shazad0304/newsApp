import { createStore, combineReducers } from 'redux';
import langReducer from './reducers/langReducer';
const rootReducer = combineReducers({
  language: langReducer
});
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;