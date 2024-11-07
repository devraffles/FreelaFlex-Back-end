import sql from "../../db/sql.js";

export default async function listPropostaProjetoServices(codProjeto) {

    if(!codProjeto){
        return res.status(401)
    }

    const proposta = await sql`
        SELECT * FROM proposta 
        WHERE codprojeto = ${codProjeto}
    `

    if(proposta.length === 0){
        return res.status(404)
    }

    return proposta;
}