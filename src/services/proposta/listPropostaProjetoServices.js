import sql from "../../db/sql.js";

export default async function listPropostaProjetoServices(codProjeto) {

    const proposta = await sql`
        SELECT * FROM proposta 
        WHERE codprojeto = ${codProjeto}
    `

    return proposta;
}