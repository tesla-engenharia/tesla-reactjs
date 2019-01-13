import { toast } from 'react-toastify';

/**
 * TYPES
 */

export const Types = {
  AUTH_REQUEST: 'login/AUTH_REQUEST',
  AUTH_SUCCESS: 'login/AUTH_SUCCESS',
  AUTH_FAILED: 'login/AUTH_FAILED',
  AUTH_LOGOUT: 'login/AUTH_LOGOUT',
  FORGOT_PASSWORD_REQUEST: 'login/FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'login/FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAIL: 'login/FORGOT_PASSWORD_FAIL',
  RESET_PASSWORD_REQUEST: 'login/RESET_PASSWORD_REQUEST',
  RESET_PASSWORD_SUCCESS: 'login/RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAIL: 'login/RESET_PASSWORD_FAIL',
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
    case Types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.FORGOT_PASSWORD_SUCCESS:
      toast.success('Verifique a caixa de entrada do seu email');
      return {
        ...state,
        loading: false,
      };
    case Types.FORGOT_PASSWORD_FAIL:
      toast.warn('Esse email não existe');
      return {
        ...state,
        loading: false,
      };
    case Types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.RESET_PASSWORD_SUCCESS:
      toast.success('Senha alterada com sucesso');
      return {
        ...state,
        loading: false,
      };
    case Types.RESET_PASSWORD_FAIL:
      toast.warn('Algo deu errado');
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  authRequest: (email, password) => ({
    type: Types.AUTH_REQUEST,
    payload: { email, password },
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
  requestNewPassword: email => ({
    type: Types.FORGOT_PASSWORD_REQUEST,
    payload: { email },
  }),
  requestNewPasswordSuccess: () => ({
    type: Types.FORGOT_PASSWORD_SUCCESS,
  }),
  requestNewPasswordFailed: () => ({
    type: Types.FORGOT_PASSWORD_FAIL,
  }),
  resetPasswordRequest: (token, password) => ({
    type: Types.RESET_PASSWORD_REQUEST,
    payload: { token, password },
  }),
  resetPasswordSuccess: () => ({
    type: Types.RESET_PASSWORD_SUCCESS,
  }),
  resetPasswordFailed: () => ({
    type: Types.RESET_PASSWORD_FAIL,
  }),
};
