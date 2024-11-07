import sql from "../../db/sql.js";

export default async function deletaCargoServices(codCargo) {

    if(!codCargo){
        return res.status(401)
    }

    const cargo = await sql`
        DELETE FROM cargo WHERE codcargo = ${codCargo} returning codcargo;
    `

    return cargo;
}