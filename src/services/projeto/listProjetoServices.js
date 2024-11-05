import sql from "../../db/sql.js";

export default async function listProjetoServices(nome) {

    const projeto = await sql`
        SELECT * FROM projeto 
        ${ nome ? sql`WHERE nome LIKE ${nome}` : sql`` }
        ORDER BY nome
    `

    return projeto;
}