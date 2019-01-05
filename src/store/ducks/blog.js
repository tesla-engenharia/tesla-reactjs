/**
 * TYPES
 */

export const Types = {
  INDEX_REQUEST: 'blog/INDEX_REQUEST',
  INDEX_SUCCESS: 'blog/INDEX_SUCCESS',
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: true,
  response: {},
};

export default function blog(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.INDEX_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.INDEX_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.payload.response,
      };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  indexRequest: (page = 1) => ({
    type: Types.INDEX_REQUEST,
    payload: { page },
  }),
  indexSuccess: response => ({
    type: Types.INDEX_SUCCESS,
    payload: { response },
  }),
};
