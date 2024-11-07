import sql from "../../db/sql.js";

export default async function editaProjetoServices(nome, descricao, habilidades, codProjeto) {

    if(!nome || !descricao || !habilidades){
        return res.status(400)
    }
    
    if(!codProjeto){
        return res.status(401)
    }

    const projetoCargo = await sql`
        UPDATE projeto SET nome = ${nome}, descricao = ${descricao}, habilidades = ${habilidades} WHERE codprojeto = ${codProjeto} returning codprojeto;
    `

    return projetoCargo;
}