import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaProjetoServices(codProjetoCargo) {

    if(!codProjetoCargo){
        throw new MyError("Registro não encontrado", 401);
    }

    const projeto = await sql`
        DELETE FROM projeto WHERE codprojeto = ${codProjetoCargo} returning codprojeto;
    `

    return projeto;
}