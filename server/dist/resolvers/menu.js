var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Menu from "../models/menu.js";
export const resolver = {
    getMenus: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const menus = yield Menu.find();
            return menus;
        }
        catch (error) {
            return error;
        }
    }),
    getById: (menu) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const menuR = yield Menu.findOne({ _id: menu.id });
            return menuR;
        }
        catch (error) {
            return error;
        }
    }),
    createMenu: (menu) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const menuDB = yield Menu.findOne({ name: menu.name });
            if (menuDB)
                return menuDB;
            const menus = yield Menu.create(menu);
            return menus;
        }
        catch (error) {
            return error;
        }
    }),
    updateMenu: (menu) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Menu.updateOne({ _id: menu.id }, menu);
            return { result: "OK" };
        }
        catch (error) {
            return { result: "ERROR" };
        }
    }),
    delMenu: (menu) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield Menu.deleteOne({ _id: menu.id });
            return { result: "OK" };
        }
        catch (error) {
            return { result: "ERROR" };
        }
    }),
};
