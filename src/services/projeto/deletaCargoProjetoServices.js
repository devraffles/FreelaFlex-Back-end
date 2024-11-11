import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaCargoProjetoServices(codProjetoCargo) {

    if(!codProjetoCargo){
        throw new MyError("Registro não encontrado", 401);
    }

    const projetoCargo = await sql`
        DELETE FROM projeto_cargo WHERE codprojetocargo = ${codProjetoCargo} returning codprojetocargo;
    `

    return projetoCargo;
}