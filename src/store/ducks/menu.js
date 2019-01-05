import menuItems from '~/config/MenuItems';

/**
 * TYPES
 */

export const Types = {
  UPDATE_ACTIVE: 'menu/UPDATE_ACTIVE',
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  pages: menuItems,
  pageActive: menuItems[0],
};

export default function menu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_ACTIVE:
      return {
        ...state,
        pageActive: action.payload.pageActive,
      };
    default:
      return state;
  }
}

/**
 * ACTIONS
 */

export const Creators = {
  updateActive: pageActive => ({
    type: Types.UPDATE_ACTIVE,
    payload: { pageActive },
  }),
};
