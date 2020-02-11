import { SET_COMPONENT } from "../constants";

const initialState = {
  component: {}
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COMPONENT:
      return { ...state, component: payload.component };

    default:
      return state;
  }
};
