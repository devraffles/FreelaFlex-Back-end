import sql from "../../db/sql.js";

export default async function registraCargoServices(cargo_nome) {

    if(!cargo_nome){
        return res.status(400)
    }

    const cargo = await sql`
        INSERT INTO cargo (cargo_nome) VALUES (${cargo_nome}) returning codcargo;
    `

    return cargo;
}