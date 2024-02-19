import { initialMenu } from "./initial-state";
import * as menuActions from "../action/action-types";
import { UnknownAction } from "redux";

const currentMenuReducer = (
  state: unknown = initialMenu,
  action: UnknownAction
) => {
  switch (action.type) {
    case menuActions.GET_CURRENT_MENU:
      return action.payload;
    case menuActions.SET_CURRENT_MENU:
      return action.payload;

    default:
      return state;
  }
};

export default currentMenuReducer;
