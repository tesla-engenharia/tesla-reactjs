import { toast } from "react-toastify";

/**
 * TYPES
 */

export const Types = {
  CREATE_REQUEST: "user/CREATE_REQUEST",
  CREATE_SUCCESS: "user/CREATE_SUCCESS",
  CREATE_FAILED: "user/CREATE_FAILED"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.CREATE_SUCCESS:
      toast.success("Conta criada com sucesso");
      return {
        ...state,
        loading: false
      };
    case Types.CREATE_FAILED:
      toast.warn(action.payload.message);
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  createRequest: (name, email, password) => ({
    type: Types.CREATE_REQUEST,
    payload: { name, email, password }
  }),
  createSuccess: () => ({
    type: Types.CREATE_SUCCESS
  }),
  createFailed: message => ({
    type: Types.CREATE_FAILED,
    payload: { message }
  })
};
