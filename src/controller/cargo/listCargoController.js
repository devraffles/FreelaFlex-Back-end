import listCargoServices from "../../services/cargo/listCargoServices.js";

export default async function listCargoController(req, res) {

    const nomeCargo = req.query.nomeCargo

    const cargo = await listCargoServices(nomeCargo);

    res.status(200).json(cargo)
}