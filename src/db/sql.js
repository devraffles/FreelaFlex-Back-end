import postgres from "postgres";

const sql = postgres({
    host: process.env.PGhost ,
    database: process.env.PGdatabase,
    username: process.env.PGusername,
    password: process.env.PGpassword,
    port: process.env.PGport,
    ssl: process.env.PGssl
});

export default sql