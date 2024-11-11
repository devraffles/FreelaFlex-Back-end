import sql from "../../db/sql.js";
import MyError from "../../error/myError.js";

export default async function registraProjetoServices(nome, descricao, habilidades) {

    if(!nome || !descricao || !habilidades){
        throw new MyError("Preencha todos os campos", 400);
    }

    const projetoCargo = await sql`
        INSERT INTO projeto(nome, descricao, habilidades)
	    VALUES (${nome}, ${descricao}, ${habilidades}) returning codprojeto;
    `

    return projetoCargo;
}