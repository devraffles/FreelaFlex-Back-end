import sql from "../../db/sql.js";

export default async function listCargoServices(nome) {

    const cargo = await sql`
        SELECT * FROM cargo 
        ${ nome ? sql`WHERE cargo_nome LIKE ${nome}` : sql`` }
        ORDER BY cargo_nome
    `

    if(cargo.length === 0){
        return res.status(404)
    }

    return cargo;
}