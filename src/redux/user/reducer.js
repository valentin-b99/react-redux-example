import { LOAD, SET, UPDATE, RESET } from './actions';
import { load, save, initialState } from './persist';


const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD:
      return load();
    case SET:
      return save(payload);
    case UPDATE:
      return save({ ...state, ...payload });
    case RESET:
      return save(initialState);
    default:
      return state;
  }
};

export default reducer;
