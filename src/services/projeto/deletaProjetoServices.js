import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaProjetoServices(codProjetoCargo) {

    if(!codProjetoCargo){
        throw new MyError("Registro não encontrado", 404);
    }

    const proposta = await sql`
        DELETE FROM proposta WHERE codprojeto = ${codProjetoCargo};
    `

    const projeto = await sql`
        DELETE FROM projeto WHERE codprojeto = ${codProjetoCargo} returning codprojeto;
    `

    return projeto;
}