import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function editaPropostaServices(
    oferta, 
    descricao, 
    duracao_estimada, 
    codprojetocargo, 
    codprojeto, 
    nome, 
    email, 
    telefone,
    codProposta
) {

    if(!oferta || !descricao || !duracao_estimada || !codprojetocargo || !codprojeto || !nome || !email || !telefone){
        throw new MyError("preencha todos os campos", 400);
    }
    
    if(!codProposta){
        throw new MyError("Registro não encontrado", 404);
    }

    const proposta = await sql`
        UPDATE proposta SET 
        oferta = ${oferta}, 
        descricao = ${descricao},
        duracao_estimada = ${duracao_estimada}, 
        codprojetocargo = ${codprojetocargo},
        codprojeto = ${codprojeto}, 
        nome = ${nome}, 
        email = ${email}, 
        telefone = ${telefone}
        WHERE codproposta = ${codProposta}
        returning codproposta;
    `

    return proposta;
}