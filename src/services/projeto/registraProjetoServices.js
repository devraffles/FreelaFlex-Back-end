import sql from "../../db/sql.js";

export default async function registraProjetoServices(nome, descricao, habilidades) {

    if(!nome || !descricao || !habilidades){
        return res.status(400)
    }

    const projetoCargo = await sql`
        INSERT INTO projeto(nome, descricao, habilidades)
	    VALUES (${nome}, ${descricao}, ${habilidades}) returning codprojeto;
    `

    return projetoCargo;
}