import sql from "../../db/sql.js";

export default async function registraProjetoServices(codcargo, codprojeto) {

    if(!codcargo || !codprojeto){
        return res.status(400)
    }

    const projetoCargo = await sql`
        INSERT INTO projeto_cargo(codcargo, codprojeto)
	    VALUES (${codcargo}, ${codprojeto}) returning codprojetocargo;
    `

    return projetoCargo;
}