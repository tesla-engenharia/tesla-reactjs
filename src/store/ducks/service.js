import { toast } from "react-toastify";

/**
 * TYPES
 */

export const Types = {
  INDEX_REQUEST: "service/INDEX_REQUEST",
  INDEX_SUCCESS: "service/INDEX_SUCCESS",
  INDEX_FAIL: "service/INDEX_FAIL",
  SHOW_REQUEST: "service/SHOW_REQUEST",
  SHOW_SUCCESS: "service/SHOW_SUCCESS",
  SHOW_FAIL: "service/SHOW_FAIL"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
  services: [],
  service: {
    id: 0,
    icon_id: 0,
    title: "",
    description: "",
    long_description: "",
    department: ""
  }
};

export default function servicos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INDEX_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload.response
      };
    case Types.INDEX_FAIL:
      toast.warn(action.payload.message);
      return {
        ...state,
        loading: false,
        response: {
          ...state.response,
          data: null
        }
      };
    case Types.SHOW_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload.service
      };
    case Types.SHOW_FAIL:
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
  indexRequest: () => ({
    type: Types.INDEX_REQUEST
  }),
  indexSuccess: response => ({
    type: Types.INDEX_SUCCESS,
    payload: { response }
  }),
  indexFail: message => ({
    type: Types.INDEX_FAIL,
    payload: { message }
  }),
  showRequest: id => ({
    type: Types.SHOW_REQUEST,
    payload: { id }
  }),
  showSuccess: service => ({
    type: Types.SHOW_SUCCESS,
    payload: { service }
  }),
  showFail: message => ({
    type: Types.SHOW_FAIL,
    payload: { message }
  })
};
