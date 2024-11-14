import postgres from "postgres";

const PGURL = `${process.env.DBURLPG}`;

const sql = postgres({
    PGURL
});

export default sql