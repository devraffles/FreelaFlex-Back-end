import editaCargoProjetoServices from "../../services/projeto/editaCargoProjetoServices.js";

export default async function editaCargoProjetoController(req, res) {

    const { codprojetocargo, codcargo, codprojeto } = req.body

    const projetoCargo = await editaCargoProjetoServices(codcargo, codprojeto, codprojetocargo);

    res.status(200).json({
        codprojetocargo: projetoCargo[0].codprojetocargo,
        status: true,
        message: "Registro Atualizado"
    })
}