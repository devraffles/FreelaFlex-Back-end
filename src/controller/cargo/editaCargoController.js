import editaCargoServices from "../../services/cargo/editaCargoServices.js";

export default async function editaCargoController(req, res) {

    const { codcargo, cargo_nome } = req.body

    const cargo = await editaCargoServices(cargo_nome, codcargo);

    res.status(200).json({
        codcargo: cargo[0].codcargo,
        status: true,
        message: "Registro Atualizado"
    })
}