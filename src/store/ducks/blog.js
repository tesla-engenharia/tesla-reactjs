/**
 * TYPES
 */

export const Types = {
  INDEX_REQUEST: "blog/INDEX_REQUEST",
  INDEX_SUCCESS: "blog/INDEX_SUCCESS",
  SHOW_REQUEST: "blog/SHOW_REQUEST",
  SHOW_SUCCESS: "blog/SHOW_SUCCESS"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: true,
  response: {
    page: 1,
    lastPage: 1,
    data: [
      {
        id: 0,
        title: "",
        user: {
          name: ""
        },
        file: {
          url: ""
        },
        fromNow: ""
      }
    ]
  },
  post: {
    id: 0,
    title: "",
    content: "",
    user: {
      name: ""
    },
    file: {
      url: ""
    },
    fromNow: "",
    readingTime: ""
  }
};

export default function blog(state = INITIAL_STATE, action) {
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
        response: action.payload.response
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
        post: action.payload.post
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
    payload: { page }
  }),
  indexSuccess: response => ({
    type: Types.INDEX_SUCCESS,
    payload: { response }
  }),
  showRequest: id => ({
    type: Types.SHOW_REQUEST,
    payload: { id }
  }),
  showSuccess: post => ({
    type: Types.SHOW_SUCCESS,
    payload: { post }
  })
};
