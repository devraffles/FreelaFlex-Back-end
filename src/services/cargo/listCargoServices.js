import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listCargoServices(nome) {

    const cargo = await sql`
        SELECT * FROM cargo 
        ${ nome ? sql`WHERE cargo_nome LIKE ${nome}` : sql`` }
        ORDER BY cargo_nome
    `

    if(cargo.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return cargo;
}