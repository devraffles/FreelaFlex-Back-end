import deletaCargoProjetoServices from "../../services/projeto/deletaCargoProjetoServices.js";
import editaProjetoServices from "../../services/projeto/editaProjetoServices.js";
import registraCargoProjetoServices from "../../services/projeto/registraCargoProjetoServices.js"

export default async function editaProjetoController(req, res) {
    const { codprojeto, nome, descricao, habilidades, cargos } = req.body

    const projeto = await editaProjetoServices(codprojeto, nome, descricao, habilidades);

    if(projeto.length === 0){
        res.status(422).json({
            status: false,
            message: "Erro ao editar projeto"
        });
    }

    await deletaCargoProjetoServices(codprojeto);

    cargos.forEach(cargo => {
        registraCargoProjetoServices(cargo, codprojeto)
    });

    res.status(200).json({
        codprojeto: projeto[0].codprojeto,
        status: true,
        message: "Registro Atualizado"
    });
}