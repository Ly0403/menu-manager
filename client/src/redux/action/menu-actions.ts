import { DocumentNode, InMemoryCache, gql } from "@apollo/client";
import * as menuActions from "./action-types";
import { Dispatch } from "redux";
import { ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://10.100.100.100:4011/graphql/",
  cache: new InMemoryCache(),
});

// Get All Menus
export const getMenusSuccess = (menus: Menu[]) => {
  return { type: menuActions.GET_MENUS, payload: menus };
};

export const getMenusError = () => {
  return { type: menuActions.GET_MENUS, payload: [] };
};

export const getMenus = () => {
  return async (dispatch: Dispatch) => {
    const MENU_QUERY: DocumentNode = gql`
      {
        getMenus {
          id
          name
        }
      }
    `;
    client
      .query({ query: MENU_QUERY })
      .then((data: any) => dispatch(getMenusSuccess(data.data.getMenus)))
      .catch(() => dispatch(getMenusError()));
  };
};

// Add new menu
export const addMenuSuccess = (menu: Menu) => {
  return { type: menuActions.ADD_MENU, payload: menu };
};

export const addMenuError = () => {
  return { type: menuActions.ADD_MENU, payload: [] };
};

export const addMenu = (menu: Menu) => {
  return async (dispatch: Dispatch) => {
    const ADD_MENU_QUERY: DocumentNode = gql`
      {
        createMenu(name:"${menu}") {
          id
          name
        }
      }
    `;
    client
      .query({ query: ADD_MENU_QUERY })
      .then((data: any) => dispatch(addMenuSuccess(data.data.createMenu)))
      .catch(() => dispatch(addMenuError()));
  };
};

// Delete menu
export const deleteMenuSuccess = (result: string) => {
  return { type: menuActions.DELETE_MENU, payload: result };
};

export const deleteMenuError = () => {
  return { type: menuActions.DELETE_MENU, payload: "Error" };
};

export const deleteMenu = (id: string) => {
  return async (dispatch: Dispatch) => {
    const DELETE_MENU_QUERY: DocumentNode = gql`
      {
        delMenu(id:"${id}") {
          result
        }
      }
    `;
    client
      .query({ query: DELETE_MENU_QUERY })
      .then((data: any) => dispatch(deleteMenuSuccess(data.data.deleteMenu)))
      .catch(() => dispatch(deleteMenuError()));
  };
};

// Get By ID
export const getByIdSuccess = (menu: Menu) => {
  return { type: menuActions.SET_CURRENT_MENU, payload: menu };
};

export const getByIdError = () => {
  return { type: menuActions.SET_CURRENT_MENU, payload: {} };
};

export const setCurrentMenu = (id: string) => {
  return async (dispatch: Dispatch) => {
    const GET_MENU_QUERY: DocumentNode = gql`
      {
        getById(id:"${id}") {
          id
          name
        }
      }
    `;
    client
      .query({ query: GET_MENU_QUERY })
      .then((data: any) => {
        dispatch(getByIdSuccess(data.data.getById));
      })
      .catch((error) => {
        dispatch(getByIdError())
      } );
  };
};


// Update Menu
export const updateMenuSuccess = (result: string) => {
  return { type: menuActions.UPDATE_MENU, payload: result };
};

export const updateMenuError = () => {
  return { type: menuActions.SET_CURRENT_MENU, payload: "Error" };
};

export const updateMenu = (id: string, name: string) => {
  return async (dispatch: Dispatch) => {
    const UPDATE_MENU_QUERY: DocumentNode = gql`
      {
        updateMenu(id:"${id}",name:"${name}") {
          result
        }
      }
    `;
    client
      .query({ query: UPDATE_MENU_QUERY })
      .then((data: any) => {
        dispatch(getByIdSuccess(data.data.updateMenu));
      })
      .catch((error) => {
        dispatch(getByIdError())
      } );
  };
};
