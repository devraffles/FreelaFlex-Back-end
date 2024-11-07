import registraProjetoServices from "../../services/projeto/registraProjetoServices.js";

export default async function registraProjetoController(req, res) {

    const { nome, descricao, habilidades } = req.body

    const projeto = await registraProjetoServices(nome, descricao, habilidades);

    res.status(201).json({
        codprojeto: projeto[0].codprojeto,
        status: true,
        message: "Registro Inserido"
    })
}