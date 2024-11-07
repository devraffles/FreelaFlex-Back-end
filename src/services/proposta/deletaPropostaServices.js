import sql from "../../db/sql.js";

export default async function deletaPropostaServices(codProposta) {

    if(!codProposta){
        return res.status(401)
    }

    const proposta = await sql`
        DELETE FROM proposta WHERE codproposta = ${codProposta} returning codproposta;
    `

    return proposta;
}