import { toast } from 'react-toastify';

/**
 * TYPES
 */

export const Types = {
  AUTH_REQUEST: 'login/AUTH_REQUEST',
  AUTH_SUCCESS: 'login/AUTH_SUCCESS',
  AUTH_FAILED: 'login/AUTH_FAILED',
  AUTH_LOGOUT: 'login/AUTH_LOGOUT',
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  isAuthenticated: !!localStorage.getItem('@Tesla:token'),
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
        isAuthenticated: true,
      };
    case Types.AUTH_FAILED:
      toast.warn(action.payload.message);
      return {
        ...state,
        loading: false,
      };
    case Types.AUTH_LOGOUT:
      return {
        ...state,
        token: '',
        isAuthenticated: false,
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
  authFailed: message => ({
    type: Types.AUTH_FAILED,
    payload: { message },
  }),
  authLogout: () => ({
    type: Types.AUTH_LOGOUT,
  }),
};
