import editaCargoServices from "../../services/cargo/editaCargoServices.js";

export default async function editaCargoController(req, res) {

    const { cargo_nome } = req.body
    const codCargo = req.query.codCargo

    const cargo = await editaCargoServices(cargo_nome, codCargo);

    res.status(200).json({
        codcargo: cargo[0].codcargo,
        status: true,
        message: "Registro Atualizado"
    })
}