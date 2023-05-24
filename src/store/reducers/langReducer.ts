import { CHANGE_LANG } from '../actions/types';
const initialState = {
  locale: 'en'
};
const langReducer = (state = initialState, action : {type : string, payload : string}) => {
  switch(action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        locale: action.payload
      };
    default:
      return state;
  }
}
export default langReducer;