import sql from "../../db/sql.js";

export default async function registraPropostaServices(oferta, descricao, duracao_estimada, codprojetocargo, codprojeto, nome, email, telefone) {

    if(!oferta || !descricao || !duracao_estimada || !codprojetocargo || !codprojeto || !nome || !email || !telefone){
        return res.status(400)
    }

    const proposta = await sql`
        INSERT INTO proposta (oferta, descricao, duracao_estimada, codprojetocargo, codprojeto, nome, email, telefone) 
        VALUES (${oferta}, ${descricao}, ${duracao_estimada}, ${codprojetocargo}, ${codprojeto}, ${nome}, ${email}, ${telefone}) returning codproposta;
    `

    return proposta;
}