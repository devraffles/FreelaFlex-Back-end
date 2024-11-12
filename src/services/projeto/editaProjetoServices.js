import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function editaProjetoServices(nome, descricao, habilidades, codProjeto) {

    if(!nome || !descricao || !habilidades){
        throw new MyError("preencha todos os campos", 400);
    }
    
    if(!codProjeto){
        throw new MyError("Registro não encontrado", 404);
    }

    const projetoCargo = await sql`
        UPDATE projeto SET nome = ${nome}, descricao = ${descricao}, habilidades = ${habilidades} WHERE codprojeto = ${codProjeto} returning codprojeto;
    `

    return projetoCargo;
}