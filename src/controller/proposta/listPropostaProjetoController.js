import listPropostaProjetoServices from "../../services/proposta/listPropostaProjetoServices.js";

export default async function listPropostaProjetoController(req, res) {

    const codProjeto = req.query.codProjeto

    const projeto = await listPropostaProjetoServices(codProjeto);

    res.status(200).json(projeto)
}