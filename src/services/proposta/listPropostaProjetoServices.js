import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listPropostaProjetoServices(codProjeto) {

    if(!codProjeto){
        throw new MyError("Registro não encontrado", 401);
    }

    const proposta = await sql`
        SELECT * FROM proposta 
        WHERE codprojeto = ${codProjeto}
    `

    if(proposta.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return proposta;
}