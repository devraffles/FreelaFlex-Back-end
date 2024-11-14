CREATE DATABASE freelaflex

CREATE TABLE cargo(
	codcargo uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	cargo_nome VARCHAR(50) NOT NULL
);

CREATE TABLE projeto(
	codprojeto uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	descricao VARCHAR(500) NOT NULL,
	habilidades VARCHAR(500) NOT NULL
);

CREATE TABLE proposta(
	codproposta uuid DEFAULT gen_random_uuid() PRIMARY KEY,
	oferta VARCHAR(50) NOT NULL,
	descricao VARCHAR(500) NOT NULL,
	duracao_estimada DECIMAL NOT NULL,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	telefone VARCHAR(50) NOT NULL,
	codprojetocargo uuid,
	codprojeto uuid
);

CREATE TABLE projeto_cargo(
    codprojetocargo uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    codcargo UUID NOT NULL,
    codprojeto UUID NOT NULL
);

ALTER TABLE proposta
ADD FOREIGN KEY(codprojetocargo)
REFERENCES projeto_cargo (codprojetocargo);

ALTER TABLE proposta
ADD FOREIGN KEY(codprojeto)
REFERENCES projeto (codprojeto);

ALTER TABLE projeto_cargo
ADD FOREIGN KEY(codcargo)
REFERENCES cargo (codcargo);

ALTER TABLE projeto_cargo
ADD FOREIGN KEY(codprojeto)
REFERENCES projeto (codprojeto);

INSERT INTO cargo (cargo_nome) VALUES ('Desenvolvedor Web');
INSERT INTO cargo (cargo_nome) VALUES ('Desenvolvedor Mobile');
INSERT INTO cargo (cargo_nome) VALUES ('Desenvolvedor de Software');
INSERT INTO cargo (cargo_nome) VALUES ('Engenheiro de Software');
INSERT INTO cargo (cargo_nome) VALUES ('Cientista de Dados');
INSERT INTO cargo (cargo_nome) VALUES ('Analista de Segurança da Informação');
INSERT INTO cargo (cargo_nome) VALUES ('Pentester');
INSERT INTO cargo (cargo_nome) VALUES ('Administrador de Sistemas');
INSERT INTO cargo (cargo_nome) VALUES ('Suporte Técnico');
INSERT INTO cargo (cargo_nome) VALUES ('Designer UI/UX');
INSERT INTO cargo (cargo_nome) VALUES ('Designer Gráfico');
INSERT INTO cargo (cargo_nome) VALUES ('Designer de Interfaces');
INSERT INTO cargo (cargo_nome) VALUES ('Designer de Produtos Digitais');
INSERT INTO cargo (cargo_nome) VALUES ('Designer de Moda');
INSERT INTO cargo (cargo_nome) VALUES ('Arquiteto');
INSERT INTO cargo (cargo_nome) VALUES ('Ilustrador');
INSERT INTO cargo (cargo_nome) VALUES ('Animador');
INSERT INTO cargo (cargo_nome) VALUES ('Redator');
INSERT INTO cargo (cargo_nome) VALUES ('Editor');
INSERT INTO cargo (cargo_nome) VALUES ('Editor de Vídeos');
INSERT INTO cargo (cargo_nome) VALUES ('Músico');
INSERT INTO cargo (cargo_nome) VALUES ('Videomaker');
INSERT INTO cargo (cargo_nome) VALUES ('Gerente de Produto');
INSERT INTO cargo (cargo_nome) VALUES ('Gestor de Mídias Sociais');
INSERT INTO cargo (cargo_nome) VALUES ('Analista de Tráfego Pago');
INSERT INTO cargo (cargo_nome) VALUES ('Pintor');
INSERT INTO cargo (cargo_nome) VALUES ('Escultor');
INSERT INTO cargo (cargo_nome) VALUES ('Fotógrafo');
INSERT INTO cargo (cargo_nome) VALUES ('Professor Particular')