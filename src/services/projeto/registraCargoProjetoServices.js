import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function registraProjetoServices(codcargo, codprojeto) {

    if(!codcargo || !codprojeto){
        throw new MyError("Preencha todos os campos", 400);
    }

    const projetoCargo = await sql`
        INSERT INTO projeto_cargo(codcargo, codprojeto)
	    VALUES (${codcargo}, ${codprojeto}) returning codprojetocargo;
    `

    return projetoCargo;
}