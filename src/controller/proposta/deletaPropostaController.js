import deletaPropostaServices from "../../services/proposta/deletaPropostaServices.js";

export default async function deletaPropostaController(req, res) {

    const codProposta = req.query.codProposta

    const proposta = await deletaPropostaServices(
        codProposta
    );

    res.status(200).json({
        codproposta: proposta[0].codproposta,
        status: true,
        message: "Registro Excluído"
    })
}