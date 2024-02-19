import { initialMenus } from "./initial-state";
import * as menuActions from "../action/action-types";
import { UnknownAction } from "redux";

const getMenusReducer = (state: unknown = initialMenus , action:UnknownAction) =>{
    switch (action.type) {
        case menuActions.GET_MENUS:
            return action.payload;
    
        default:
            return state;
    }
} 

export default getMenusReducer;