import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaCargoServices(codCargo) {

    if(!codCargo){
        throw new MyError("Registro não encontrado", 401);
    }

    const cargo = await sql`
        DELETE FROM cargo WHERE codcargo = ${codCargo} returning codcargo;
    `

    return cargo;
}