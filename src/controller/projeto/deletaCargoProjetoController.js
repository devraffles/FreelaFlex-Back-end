import deletaCargoProjetoServices from "../../services/projeto/deletaCargoProjetoServices.js";

export default async function deletaCargoProjetoController(req, res) {

    const codProjeto = req.query.codProjeto

    const projetoCargo = await deletaCargoProjetoServices(codProjeto);

    res.status(200).json({
        codprojeto: projetoCargo[0].codprojeto,
        status: true,
        message: "Registro Excluído"
    })
}