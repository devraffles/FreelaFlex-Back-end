import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaPropostaProjetoServices(codProjeto) {

    if(!codProjeto){
        throw new MyError("Registro não encontrado", 404);
    }

    const proposta = await sql`
        DELETE FROM proposta 
        ${ codProjeto ? sql`WHERE codprojeto = ${codProjeto}` : sql`` }
        returning codproposta;
    `

    return proposta;
}