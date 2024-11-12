import registraProjetoServices from "../../services/projeto/registraProjetoServices.js";
import registraCargoProjetoServices from "../../services/projeto/registraCargoProjetoServices.js"

export default async function registraProjetoController(req, res) {

    const { nome, descricao, habilidades, cargos } = req.body

    const projeto = await registraProjetoServices(nome, descricao, habilidades);

    cargos.forEach(cargo => {
        registraCargoProjetoServices(cargo, projeto[0].codprojeto)
    });

    res.status(201).json({
        codprojeto: projeto[0].codprojeto,
        status: true,
        message: "Registro Inserido"
    })
}