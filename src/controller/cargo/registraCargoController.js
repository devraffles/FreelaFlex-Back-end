import registraCargoServices from "../../services/cargo/registraCargoServices.js";

export default async function registraCargoController(req, res) {

    const { cargo_nome } = req.body

    const cargo = await registraCargoServices(cargo_nome);

    res.status(201).json({
        codcargo: cargo[0].codcargo,
        status: true,
        message: "Registro Inserido"
    })
}