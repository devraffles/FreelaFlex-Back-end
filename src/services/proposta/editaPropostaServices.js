import sql from "../../db/sql.js";

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
        return res.status(400)
    }
    
    if(!codProposta){
        return res.status(401)
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