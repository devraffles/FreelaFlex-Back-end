import listCargoProjetoServices from "../../services/projeto/listCargoProjetoServices.js";

export default async function listProjetoController(req, res) {

    const codProjeto = req.query.codProjeto

    const projeto = await listCargoProjetoServices(codProjeto);

    res.status(200).json(projeto)
}