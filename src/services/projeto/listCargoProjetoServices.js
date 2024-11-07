import sql from "../../db/sql.js";

export default async function listCargoProjetoServices(codProjeto) {

    const projeto = await sql`
        SELECT * FROM projeto_cargo 
        ${ codProjeto ? sql`WHERE codprojeto = ${codProjeto}` : sql`` }
    `

    if(projeto.length === 0){
        return res.status(404)
    }

    return projeto;
}