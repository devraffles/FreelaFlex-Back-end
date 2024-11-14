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
router.get('/cargo', listCargoController);
router.post('/cargo', registraCargoController);
router.put('/cargo', editaCargoController);
router.delete('/cargo', deletaCargoController);

//Projeto
router.get('/projeto', listProjetoController);
router.get('/projeto/cargo', listCargoProjetoController);
router.post('/projeto', registraProjetoController);
router.post('/projeto/cargo', registraCargoProjetoController);
router.put('/projeto', editaProjetoController);
router.put('/projeto/cargo', editaCargoProjetoController);
router.delete('/projeto', deletaProjetoController);
router.delete('/projeto/cargo', deletaCargoProjetoController);

//Proposta
router.get('/proposta', listPropostaController);
router.get('/proposta/projeto', listPropostaProjetoController);
router.post('/proposta', registraPropostaController);
router.put('/proposta', editaPropostaController);
router.delete('/proposta', deletaPropostaController);

export default router