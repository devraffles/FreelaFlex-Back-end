import { Router } from "express";

//Cargo
import listCargoController from './controller/cargo/listCargoController.js'

//Projeto
import listProjetoController from "./controller/projeto/listProjetoController.js";
import listCargoProjetoController from "./controller/projeto/listCargoProjetoController.js";

//Proposta
import listPropostaController from "./controller/proposta/listPropostaController.js";
import listPropostaProjetoController from "./controller/proposta/listPropostaProjetoController.js";

const router = Router();

router.get('/ping', (req, res) => {
    return res.json({ pong: true });
});

//Cargo
router.get('/cargo/list', listCargoController)

//Projeto
router.get('/projeto/list', listProjetoController)
router.get('/projeto/list/cargo', listCargoProjetoController)

//Proposta
router.get('/proposta/list', listPropostaController)
router.get('/proposta/list/projeto', listPropostaProjetoController)

export default router