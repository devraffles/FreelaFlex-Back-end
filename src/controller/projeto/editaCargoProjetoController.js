import editaCargoProjetoServices from "../../services/projeto/editaCargoProjetoServices.js";

export default async function editaCargoProjetoController(req, res) {

    const { codcargo, codprojeto } = req.body
    const codProjetoCargo = req.query.codProjetoCargo

    const projetoCargo = await editaCargoProjetoServices(codcargo, codprojeto, codProjetoCargo);

    res.status(200).json({
        codprojetocargo: projetoCargo[0].codprojetocargo,
        status: true,
        message: "Registro Atualizado"
    })
}