import deletaCargoServices from "../../services/cargo/deletaCargoServices.js";

export default async function deletaCargoController(req, res) {

    const codCargo = req.query.codCargo

    const cargo = await deletaCargoServices(codCargo);

    res.status(200).json({
        codcargo: cargo[0].codcargo,
        status: true,
        message: "Registro Excluído"
    })
}