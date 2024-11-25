import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listPropostaProjetoServices(codProjeto) {

    if(!codProjeto){
        throw new MyError("Registro não encontrado", 404);
    }

    const proposta = await sql`
        SELECT 
            pp.*,
            c.cargo_nome as "nomecargo"
        FROM 
            proposta as pp
            INNER JOIN projeto_cargo as pc ON (pp.codprojetocargo = pc.codprojetocargo)
            INNER JOIN cargo as c ON (c.codcargo = pc.codcargo)
        WHERE 
            pp.codprojeto = ${codProjeto}
    `

    if(proposta.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return proposta;
}