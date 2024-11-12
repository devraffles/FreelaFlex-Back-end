import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function editaCargoProjetoServices(codcargo, codprojeto, codProjetoCargo) {

    if(!codcargo || !codprojeto){
        throw new MyError("preencha todos os campos", 400);
    }
    
    if(!codProjetoCargo){
        throw new MyError("Registro não encontrado", 404);
    }

    const projetoCargo = await sql`
        UPDATE projeto_cargo SET codcargo = ${codcargo}, codprojeto = ${codprojeto} WHERE codprojetocargo = ${codProjetoCargo} returning codprojetocargo;
    `

    return projetoCargo;
}