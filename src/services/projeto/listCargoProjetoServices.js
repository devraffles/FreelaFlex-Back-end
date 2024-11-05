import sql from "../../db/sql.js";

export default async function listCargoProjetoServices(codProjeto) {

    const proposta = await sql`
        SELECT * FROM projeto_cargo 
        WHERE codprojeto = ${codProjeto}
    `

    return proposta;
}