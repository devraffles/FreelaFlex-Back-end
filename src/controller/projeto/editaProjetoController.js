import deletaCargoProjetoServices from "../../services/projeto/deletaCargoProjetoServices.js";
import editaProjetoServices from "../../services/projeto/editaProjetoServices.js";

export default async function editaProjetoController(req, res) {
    const { codprojeto, nome, descricao, habilidades, cargos } = req.body

    const projeto = new Promise ((resolve, reject) => {

        editaProjetoServices(codprojeto, nome, descricao, habilidades)

    }).then((sucess) => {
        deletaCargoProjetoServices(codprojeto).then((sucess) => {
            cargos.forEach(cargo => {
                registraCargoProjetoServices(cargo, codprojeto)
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