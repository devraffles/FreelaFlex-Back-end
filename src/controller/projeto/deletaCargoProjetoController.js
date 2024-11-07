import deletaCargoProjetoServices from "../../services/projeto/deletaCargoProjetoServices.js";

export default async function deletaCargoProjetoController(req, res) {

    const codProjetoCargo = req.query.codProjetoCargo

    const projetoCargo = await deletaCargoProjetoServices(codProjetoCargo);

    res.status(200).json({
        codprojetocargo: projetoCargo[0].codprojetocargo,
        status: true,
        message: "Registro Excluído"
    })
}