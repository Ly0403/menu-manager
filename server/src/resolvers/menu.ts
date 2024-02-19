import { ObjectId } from "mongoose";
import Menu from "../models/menu.js";

export const resolver = {
  getMenus: async () => {
    try {
      const menus = await Menu.find();
      return menus;
    } catch (error) {
      return error;
    }
  },
  getById: async (menu: Menu) => {
    try {
      const menuR = await Menu.findOne({_id: menu.id});
      return menuR;
    } catch (error) {
      return error;
    }
  },
  createMenu: async (menu: Menu) => {
    try {
      const menuDB = await Menu.findOne({ name: menu.name });
      if (menuDB) return menuDB;
      const menus = await Menu.create(menu);
      return menus;
    } catch (error) {
      return error;
    }
  },
  updateMenu: async (menu: Menu) => {
    try {
      await Menu.updateOne({ _id: menu.id }, menu);
      return { result: "OK" };
    } catch (error) {
      return { result: "ERROR" };
    }
  },
  delMenu: async (menu: Menu) => {
    try {
      await Menu.deleteOne({ _id: menu.id });
      return { result: "OK" };
    } catch (error) {
      return { result: "ERROR" };
    }
  },
};
