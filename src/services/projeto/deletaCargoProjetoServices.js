import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaCargoProjetoServices(codProjeto) {

    if(!codProjeto){
        throw new MyError("Registro não encontrado", 404);
    }

    const projetoCargo = await sql`
        DELETE FROM projeto_cargo WHERE codprojeto = ${codProjeto} returning codprojeto;
    `

    return projetoCargo;
}