import sql from "../../db/sql.js";

export default async function deletaProjetoServices(codProjetoCargo) {

    if(!codProjetoCargo){
        return res.status(401)
    }

    const projeto = await sql`
        DELETE FROM projeto WHERE codprojeto = ${codProjetoCargo} returning codprojeto;
    `

    return projeto;
}