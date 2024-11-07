import registraCargoProjetoServices from "../../services/projeto/registraCargoProjetoServices.js";

export default async function registraCargoProjetoController(req, res) {

    const { codcargo, codprojeto } = req.body

    const projetoCargo = await registraCargoProjetoServices(codcargo, codprojeto);

    res.status(201).json({
        codprojetocargo: projetoCargo[0].codprojetocargo,
        status: true,
        message: "Registro Inserido"
    })
}