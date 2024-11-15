import postgres from "postgres";

const sql = postgres({
    host: process.env.PG_HOST ,
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    port: process.env.PG_PORT,
    ssl: process.env.PG_SSL
});

export default sql