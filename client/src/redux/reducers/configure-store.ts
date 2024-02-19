import { thunk } from "redux-thunk";
import getMenusReducer from "./get-menus-reducer";
import { Tuple, configureStore } from "@reduxjs/toolkit";
import currentMenuReducer from "./current-menu";

export const configureStorage = () => {
  return configureStore({
    reducer: {
      getMenusReducer,
      currentMenuReducer
    },
    middleware: () => new Tuple(thunk),
  });
};
