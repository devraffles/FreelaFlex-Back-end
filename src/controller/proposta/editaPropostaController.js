import editaPropostaServices from "../../services/proposta/editaPropostaServices.js";

export default async function editaPropostaController(req, res) {

    const { codproposta, oferta, descricao, duracao_estimada, codprojetocargo, codprojeto, nome, email, telefone } = req.body

    const proposta = await editaPropostaServices(
        oferta, 
        descricao, 
        duracao_estimada, 
        codprojetocargo, 
        codprojeto, 
        nome, 
        email, 
        telefone, 
        codproposta
    );

    res.status(200).json({
        codproposta: proposta[0].codproposta,
        status: true,
        message: "Registro Atualizado"
    })
}