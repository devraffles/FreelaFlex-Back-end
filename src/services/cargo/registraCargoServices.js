import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function registraCargoServices(cargo_nome) {

    if(!cargo_nome){
        throw new MyError("Preencha todos os campos", 400);
    }

    const cargo = await sql`
        INSERT INTO cargo (cargo_nome) VALUES (${cargo_nome}) returning codcargo;
    `

    return cargo;
}