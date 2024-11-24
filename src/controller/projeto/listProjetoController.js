import listProjetoServices from "../../services/projeto/listProjetoServices.js";

export default async function listProjetoController(req, res) {

    const codProjeto = req.query.codProjeto

    const projeto = await listProjetoServices(codProjeto);

    res.status(200).json(projeto)
}