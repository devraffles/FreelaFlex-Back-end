import listProjetoServices from "../../services/projeto/listProjetoServices.js";

export default async function listProjetoController(req, res) {

    const nomeProjeto = req.query.nomeProjeto

    const projeto = await listProjetoServices(nomeProjeto);

    res.status(200).json(projeto)
}