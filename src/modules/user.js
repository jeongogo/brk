import { createAction, handleActions } from 'redux-actions';

const SET_USER = 'auth/SET_USER';

export const setUser = createAction(SET_USER, (user) => user);

const initialState = {
  user: null,
  isAdmin: false,
};

const user = handleActions(
  {
    [SET_USER]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
  initialState,
);

export default user;
