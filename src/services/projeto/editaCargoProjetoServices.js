import sql from "../../db/sql.js";

export default async function editaCargoProjetoServices(codcargo, codprojeto, codProjetoCargo) {

    if(!codcargo || !codprojeto){
        return res.status(400)
    }
    
    if(!codProjetoCargo){
        return res.status(401)
    }

    const projetoCargo = await sql`
        UPDATE projeto_cargo SET codcargo = ${codcargo}, codprojeto = ${codprojeto} WHERE codprojetocargo = ${codProjetoCargo} returning codprojetocargo;
    `

    return projetoCargo;
}