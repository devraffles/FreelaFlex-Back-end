import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listProjetoServices(nome) {

    const projeto = await sql`
        SELECT * FROM projeto 
        ${ nome ? sql`WHERE nome LIKE ${nome}` : sql`` }
        ORDER BY nome
    `

    if(projeto.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return projeto;
}