import { toast } from "react-toastify";

/**
 * TYPES
 */

export const Types = {
  INDEX_REQUEST: "blog/INDEX_REQUEST",
  INDEX_SUCCESS: "blog/INDEX_SUCCESS",
  SHOW_REQUEST: "blog/SHOW_REQUEST",
  SHOW_SUCCESS: "blog/SHOW_SUCCESS",
  CREATE_REQUEST: "blog/CREATE_REQUEST",
  CREATE_SUCCESS: "blog/CREATE_SUCCESS",
  CREATE_FAIL: "blog/CREATE_FAIL"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  loading: false,
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
    case Types.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case Types.CREATE_SUCCESS:
      toast.success("Post criado com sucesso");
      return {
        ...state,
        loading: false
      };
    case Types.CREATE_FAIL:
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
  }),
  createRequest: post => ({
    type: Types.CREATE_REQUEST,
    payload: { post }
  }),
  createSuccess: () => ({
    type: Types.CREATE_SUCCESS
  }),
  createFail: message => ({
    type: Types.CREATE_FAIL,
    payload: { message }
  })
};
