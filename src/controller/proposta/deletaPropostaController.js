import deletaPropostaServices from "../../services/proposta/deletaPropostaServices.js";

export default async function deletaPropostaController(req, res) {

    const codProjeto = req.query.codProposta

    const proposta = await deletaPropostaServices(
        codProjeto
    );

    res.status(200).json({
        codproposta: proposta[0].codproposta,
        status: true,
        message: "Registro Excluído"
    })
}