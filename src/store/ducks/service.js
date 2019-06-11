/**
 * TYPES
 */

export const Types = {
  SHOW_REQUEST: "service/SHOW_REQUEST",
  SHOW_SUCCESS: "service/SHOW_SUCCESS",
  SHOW_FAIL: "service/SHOW_FAIL"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
  response: {},
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
