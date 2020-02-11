import { SET_COMPONENT } from "../constants";
import store from "../index";

export const setComponentByStore = component => {
  store.dispatch({
    type: SET_COMPONENT,
    payload: { component: component }
  });
};

export const setComponent = component => dispatch => {
  dispatch({ type: SET_COMPONENT, payload: { component } });
};
