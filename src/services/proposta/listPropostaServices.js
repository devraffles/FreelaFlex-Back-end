import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function listPropostaServices(codProposta) {

    const proposta = await sql`
        SELECT * FROM proposta 
        ${ codProposta ? sql`WHERE codproposta = ${codProposta}` : sql`` }
    `

    if(proposta.length === 0){
        throw new MyError("Não foi possivel encontrar o registro", 404);
    }

    return proposta;
}