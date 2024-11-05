import postgres from "postgres";

const PGURL = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.ENDPOINT}/${process.env.PGDATABASE}`;

const sql = postgres({
    PGURL
});

export default sql