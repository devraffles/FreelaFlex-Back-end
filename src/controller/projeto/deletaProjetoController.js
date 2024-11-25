import deletaProjetoServices from "../../services/projeto/deletaProjetoServices.js";
import deletaCargoProjetoServices from "../../services/projeto/deletaCargoProjetoServices.js"
import deletaPropostaProjetoServices from "../../services/proposta/deletaPropostaProjetoServices.js";

export default async function deletaProjetoController(req, res) {

    const codProjeto = req.query.codProjeto

    const projeto = new Promise ((resolve, reject) => {
        deletaPropostaProjetoServices(codProjeto).then(() => {
            deletaCargoProjetoServices(codProjeto).then(() => {
                    deletaProjetoServices(codProjeto).then(() => {
                        res.status(200).json({
                            codprojeto: projeto[0].codprojeto,
                            status: true,
                            message: "Registro Excluído"
                        });
                    }).catch(() => {
                        res.status(422).json({
                            status: false,
                            message: "Erro ao deletar projeto"
                        });
                    });
            }).catch(() => {
                res.status(422).json({
                    status: false,
                    message: "Erro ao deletar cargos do projeto e o projeto"
                });
            });
        }).catch(() => {
            res.status(422).json({
                status: false,
                message: "Erro ao deletar proposta do projeto"
            });
        });
    });
}