import sql from "../../db/sql.js";

export default async function editaCargoServices(cargo_nome, codCargo) {

    if(!cargo_nome){
        return res.status(400)
    }
    
    if(!codCargo){
        return res.status(401)
    }

    const cargo = await sql`
        UPDATE cargo SET cargo_nome = ${cargo_nome} WHERE codcargo = ${codCargo} returning codcargo;
    `

    return cargo;
}