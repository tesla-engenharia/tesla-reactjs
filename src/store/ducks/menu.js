import menuItems from "~/config/MenuItems";

/**
 * TYPES
 */

export const Types = {
  UPDATE_ACTIVE: "menu/UPDATE_ACTIVE",
  OPEN_SIDEDRAWER: "menu/OPEN_SIDEDRAWER"
};

/**
 * REDUCERS
 */

const INITIAL_STATE = {
  pages: menuItems,
  pageActive: menuItems[0],
  sideDrawer: false
};

export default function menu(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_ACTIVE:
      return {
        ...state,
        pageActive: action.payload.pageActive
      };
    case Types.OPEN_SIDEDRAWER:
      return {
        ...state,
        sideDrawer: action.payload.isOpen
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
    payload: { pageActive }
  }),
  openSideDrawer: isOpen => ({
    type: Types.OPEN_SIDEDRAWER,
    payload: { isOpen }
  })
};
