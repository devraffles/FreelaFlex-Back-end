import { Router } from "express";

//Cargo
import listCargoController from './controller/cargo/listCargoController.js';

import registraCargoController from "./controller/cargo/registraCargoController.js";

import editaCargoController from "./controller/cargo/editaCargoController.js";

import deletaCargoController from "./controller/cargo/deletaCargoController.js";

//Projeto
import listProjetoController from "./controller/projeto/listProjetoController.js";

import listCargoProjetoController from "./controller/projeto/listCargoProjetoController.js";

import registraProjetoController from "./controller/projeto/registraProjetoController.js";

import registraCargoProjetoController from "./controller/projeto/registraCargoProjetoController.js";

import deletaProjetoController from "./controller/projeto/deletaProjetoController.js";

import deletaCargoProjetoController from "./controller/projeto/deletaCargoProjetoController.js";

import editaProjetoController from "./controller/projeto/editaProjetoController.js";

import editaCargoProjetoController from "./controller/projeto/editaCargoProjetoController.js";

//Proposta
import listPropostaController from "./controller/proposta/listPropostaController.js";

import listPropostaProjetoController from "./controller/proposta/listPropostaProjetoController.js";

import registraPropostaController from "./controller/proposta/registraPropostaController.js";

import editaPropostaController from "./controller/proposta/editaPropostaController.js";

import deletaPropostaController from "./controller/proposta/deletaPropostaController.js";

const router = Router();

router.get('/ping', (req, res) => {
    return res.json({ pong: true });
});

//Cargo
router.get('/cargo/list', listCargoController);
router.post('/cargo/registro', registraCargoController);
router.put('/cargo/edit', editaCargoController);
router.delete('/cargo/delete', deletaCargoController);

//Projeto
router.get('/projeto/list', listProjetoController);
router.get('/projeto/list/cargo', listCargoProjetoController);
router.post('/projeto/registro', registraProjetoController);
router.post('/projeto/cargo/registro', registraCargoProjetoController);
router.put('/projeto/edit', editaProjetoController);
router.put('/projeto/cargo/edit', editaCargoProjetoController);
router.delete('/projeto/delete', deletaProjetoController);
router.delete('/projeto/cargo/delete', deletaCargoProjetoController);

//Proposta
router.get('/proposta/list', listPropostaController);
router.get('/proposta/list/projeto', listPropostaProjetoController);
router.post('/proposta/registro', registraPropostaController);
router.put('/proposta/edit', editaPropostaController);
router.delete('/proposta/delete', deletaPropostaController);

export default router