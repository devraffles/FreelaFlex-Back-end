import sql from "../../db/sql.js";

export default async function deletaCargoProjetoServices(codProjetoCargo) {

    if(!codProjetoCargo){
        return res.status(401)
    }

    const projetoCargo = await sql`
        DELETE FROM projeto_cargo WHERE codprojetocargo = ${codProjetoCargo} returning codprojetocargo;
    `

    return projetoCargo;
}