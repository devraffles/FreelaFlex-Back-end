import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function deletaPropostaServices(codProposta) {

    if(!codProposta){
        throw new MyError("Registro não encontrado", 404);
    }

    const proposta = await sql`
        DELETE FROM proposta 
        ${ codProposta ? sql`WHERE codproposta = ${codProposta}` : sql`` }
        returning codproposta;
    `

    return proposta;
}