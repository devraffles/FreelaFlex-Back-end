import deletaProjetoServices from "../../services/projeto/deletaProjetoServices.js";

export default async function deletaProjetoController(req, res) {

    const codProjeto = req.query.codProjeto

    const projeto = await deletaProjetoServices(codProjeto);

    res.status(200).json({
        codprojeto: projeto[0].codprojeto,
        status: true,
        message: "Registro Excluído"
    })
}