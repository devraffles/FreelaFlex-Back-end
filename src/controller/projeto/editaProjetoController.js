import editaProjetoServices from "../../services/projeto/editaProjetoServices.js";

export default async function editaProjetoController(req, res) {

    const { nome, descricao, habilidades } = req.body
    const codProjeto = req.query.codProjeto

    const projeto = await editaProjetoServices(nome, descricao, habilidades, codProjeto);

    res.status(200).json({
        codprojeto: projeto[0].codprojeto,
        status: true,
        message: "Registro Atualizado"
    })
}