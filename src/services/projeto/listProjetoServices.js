import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listProjetoServices(codProjeto) {

    const projeto = await sql`
        SELECT * FROM projeto 
        ${ codProjeto ? sql`WHERE codprojeto = ${codProjeto}` : sql`` }
        ORDER BY nome
    `

    if(projeto.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return projeto;
}