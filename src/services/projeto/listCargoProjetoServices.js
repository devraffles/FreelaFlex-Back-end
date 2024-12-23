import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listCargoProjetoServices(codProjeto) {

    const projeto = await sql`
        SELECT 
            pc.*,
            c.cargo_nome as "nomecargo"
        FROM 
            projeto_cargo as pc
            INNER JOIN cargo as c ON (c.codcargo = pc.codcargo)
        ${ codProjeto ? sql`WHERE codprojeto = ${codProjeto}` : sql`` }
    `

    if(projeto.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return projeto;
}