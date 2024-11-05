import listPropostaServices from "../../services/proposta/listPropostaServices.js";

export default async function listPropostaController(req, res) {

    const codProposta = req.query.codProposta

    const proposta = await listPropostaServices(codProposta);

    res.status(200).json(proposta)
}