import { buildSchema } from "graphql";
export const schema = buildSchema(`
type Query{
    getMenus: [Menu],
    getById(id:String): Menu,
    createMenu(name:String): Menu,
    updateMenu(id:String,name:String):Result,
    delMenu(id:String):Result,
}

type Menu{
    id: String
    name: String
} 

type Result{
    result:String
} 
`);
