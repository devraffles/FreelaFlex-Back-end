import registraPropostaServices from "../../services/proposta/registraPropostaServices.js";

export default async function registraPropostaController(req, res) {

    const { oferta, descricao, duracao_estimada, codprojetocargo, codprojeto, nome, email, telefone } = req.body

    const proposta = await registraPropostaServices(oferta, descricao, duracao_estimada, codprojetocargo, codprojeto, nome, email, telefone);

    res.status(201).json({
        codproposta: proposta[0].codproposta,
        status: true,
        message: "Registro Inserido"
    })
}