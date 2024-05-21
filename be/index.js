import app from "./src/server.js";
// import knex from "knex";
const SERVER_PORT = 3000;

// const db_instance = knex(knexConfig);

// global.db_con = db_instance;
// global.User = global.db_con("users");
// global.Word = global.db_con("words");
app.listen(SERVER_PORT, async () => {
  console.log(`server port: ${SERVER_PORT}`);
});
