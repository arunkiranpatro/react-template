import { SET_COMPONENT } from "../constants";

export const setComponent = component => dispatch => {
  dispatch({ type: SET_COMPONENT, payload: { component } });
};
