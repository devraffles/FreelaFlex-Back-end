import sql from "../../db/sql.js";

export default async function listPropostaServices(codProposta) {

    const proposta = await sql`
        SELECT * FROM proposta 
        ${ codProposta ? sql`WHERE codproposta = ${codProposta}` : sql`` }
    `

    return proposta;
}