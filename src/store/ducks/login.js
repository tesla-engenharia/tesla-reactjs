/**
 * TYPES
 */

export const Types = {
  AUTH_REQUEST: 'login/AUTH_REQUEST',
  AUTH_SUCCESS: 'login/AUTH_SUCCESS',
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
  token: '',
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  authRequest: (email, password, history) => ({
    type: Types.AUTH_REQUEST,
    payload: { email, password, history },
  }),
  authSuccess: token => ({
    type: Types.AUTH_SUCCESS,
    payload: { token },
  }),
};
