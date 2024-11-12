import deletaCargoProjetoServices from "../../services/projeto/deletaCargoProjetoServices.js";
import editaProjetoServices from "../../services/projeto/editaProjetoServices.js";
import MyError from "../../error/myError.js";

export default async function editaProjetoController(req, res) {

    const { nome, descricao, habilidades, cargos } = req.body
    const codProjeto = req.query.codProjeto

    const projeto = new Promise ((resolve, reject) => {

        editaProjetoServices(nome, descricao, habilidades, codProjeto)

    }).then((sucess) => {
        deletaCargoProjetoServices(codProjeto).then((sucess) => {
            cargos.forEach(cargo => {
                registraCargoProjetoServices(cargo, codProjeto)
            });

            res.status(200).json({
                codprojeto: projeto[0].codprojeto,
                status: true,
                message: "Registro Atualizado"
            });
        }).catch(() => {
            res.status(422).json({
                status: false,
                message: "Erro ao excluir cargos do projeto"
            });
        });
    }).catch(() => {
        res.status(422).json({
            status: false,
            message: "Erro ao editar projeto"
        });
    });
}