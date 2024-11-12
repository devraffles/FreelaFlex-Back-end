import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function editaCargoServices(cargo_nome, codCargo) {

    if(!cargo_nome){
        throw new MyError("preencha todos os campos", 400);
    }
    
    if(!codCargo){
        throw new MyError("Registro não encontrado", 404);
    }

    const cargo = await sql`
        UPDATE cargo SET cargo_nome = ${cargo_nome} WHERE codcargo = ${codCargo} returning codcargo;
    `

    return cargo;
}