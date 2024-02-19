import express from "express";
import { dbConnect } from "./config/db.js";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schemas/menu.js";
import { resolver } from "./resolvers/menu.js";
import { ruruHTML } from "ruru/server";
import cors from "cors";
const app = express();
app.use(cors());
app.all("/graphql", createHandler({ schema, rootValue: resolver }));
app.get('/', (req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/graphql" }));
});
dbConnect()
    .then(() => {
    app.listen(4011);
    console.log("The server is listening...");
})
    .catch((err) => console.log(err));
