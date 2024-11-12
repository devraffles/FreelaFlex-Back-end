# FreelaFlex API
## Objetivo:

A FreelaFlex é uma plataforma Freelance inovadora que permite aos usuários contratar profissionais ou prestar serviços.
Conectando talentos a projetos que atendem às suas necessidades e objetivos, nossa ideia é fornecer flexibilidade e autonomia.
A FreelaFlex oferece uma experiência personalizada e eficiente para todos os envolvidos, seja como cliente ou freelancer.

<div align="center">
  <img alt="Logo FreelaFlex" src="https://github.com/devraffles/FreelaFlex/blob/main/README-IMG/FREELAFLEX%20DARK%20MODE.svg" heght="50px"/>
</div>

#

API hospedada em: Ainda não possui hospedagem

## Como rodar o Back End

Quando baixar rodar o comando:

```bash
npm install
# or
yarn install
```

Para poder rodar o projeto basta rodar o comando:

```bash
npm run dev
# or
yarn dev
```


## Sumário

* [Status Codes](#status-codes)
#
* [Responses](#responses)
#
* [Endpoints](#endpoints)
#

### Rotas:

* [Ping](#testar-conexão)


##### Projetos
* [Listar Projetos](#listar-todos-os-projetos)
#
* [Listar Cargos do Projeto](#listar-todos-os-cargos-do-projeto)
#
* [Ver um Projeto](#ver-um-único-projeto)
#
* [Registrar um Projeto](#registrar-um-projeto)
#
* [Registrar Cargos do Projeto](#registrar-um-cargo-no-projeto)
#
* [Editar Projeto](#editar-um-projeto)
#
* [Editar Cargos do Projeto](#editar-um-cargo-do-projeto)
#
* [Deletar Projeto](#deletar-um-projeto)
#
* [Deletar Cargos do Projeto](#deletar-um-cargo-do-projeto)

##### Proposta
#
* [Listar Proposta](#listar-todas-as-propostas)
#
* [Listar Propostas de um Projeto](#listar-todos-as-propostas-do-projeto)
#
* [Ver um Proposta](#ver-uma-única-proposta)
#
* [Registrar uma Proposta](#registrar-uma-proposta)
#
* [Editar Proposta](#editar-uma-proposta)
#
* [Deletar Proposta](#deletar-uma-proposta)
#

##### Cargo
* [Listar Cargo](#listar-todos-os-cargo)
#
* [Ver um Cargo](#ver-um-único-cargo)
#
* [Registrar uma Cargo](#registrar-um-cargo)
#
* [Editar Cargo](#editar-um-cargo) 
#
* [Deletar Cargo](#deletar-um-cargo)

#

## Status Codes

Os status de respostas possíveis para esta API são:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST (REQUISIÇÃO FALHOU)`|
| 404 | `NOT FOUND (NÃO ENCONTRADO)` |
| 422 | `UNPROCESSABLE ENTITY (ENTIDADE NÃO PROCESSADA)`|
| 500 | `INTERNAL SERVER ERROR (ERRO DO SERVIDOR INTERNO)` |

#

## Responses

Os endpoints terão sempre 3 possíveis responses, 
sendo eles:

```javascript
{
  ...
  "message": string
}
```

```javascript
{
  "error": string
}
```

```javascript
{
  "status": boolean
}
```

* O atributo `message` estará presente no caso de uma request indica que encontrou uma condição inesperada e que o impediu de atender à solicitação, retornando Internal Server Error, STATUS CODE: 500.

* O atributo `error` estará presente no caso de uma request não seja devidamente concluída, retornando o devido erro.

* O atributo `status` estará presente no caso de uma request não seja devidamente concluída, retornando o devido erro.

Além disso, os endpoints podem retornar outros atributos específicos, mas sempre serão retornados (`error` ou `status`).

#

## Endpoints:

### Testar conexão

```http
GET /ping
```

Esse endpoint tem o objetivo de mostrar se a API está em funcionamento

Response:

```javascript
{
  "pong": true
}
```

Em caso de erro retornará somente o `error`

#

# Projeto

#### Listar todos os projetos

```http
GET /projeto/list
```

Response:

```javascript
{
  "projeto": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codprojeto": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
    "nome": "Vortex",
    "descricao": "Vortex é uma plataforma de análise de dados em tempo real que captura, processa e visualiza fluxos de dados massivos, permitindo a tomada de decisões mais rápidas e inteligentes.",
    "habilidades": "Python, Java, C++, TensorFlow, PyTorch, React, Arquitetura de software, Desenvolvimento de APIs",
  },
  {
    "codprojeto": "gr8er59c-a9s1-dujv-u89h-8hasc87h23rg",
    "nome": "Ethereal Core",
    "descricao": "Um ambiente virtual imersivo e altamente realista, onde os usuários podem explorar mundos digitais complexos e interagir com objetos e outros usuários de forma intuitiva.",
    "habilidades": "C, C++, Rust, Arquitetura de sistemas, gerenciamento de memória, drivers de dispositivo,",
  },
]
```

#

#### Listar todos os cargos do projeto

```http
GET /projeto/list/cargo?codProjeto=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do projeto para procurar os cargos a ser mostrado |

Response:

```javascript
{
  "projeto": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codprojetocargo": "dff34gs7-ajd8-h56e-sdt5-sdfgw45tdrg5",
    "codcargo": "hjhb7rjd-jf76-ke73-gew4-jdf7fhw8fi09",
    "codprojeto": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
  },
  {
    "codprojetocargo": "ghd8sj36-jfv7-5g4r-d9uj-jfj8edrugjs8",
    "codcargo": "gbh8d8s9-8uja-8fua-kb89-9eurfjv8wef7",
    "codprojeto": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
  },
]
```

#

#### Ver um único projeto

```http
GET /projeto/list?nomeProjeto=${nome}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nome` | `string` | **Required**. Nome do projeto a ser mostrado |

Response:

```javascript
{
  "projeto": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codprojeto": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
    "nome": "Vortex",
    "descricao": "Vortex é uma plataforma de análise de dados em tempo real que captura, processa e visualiza fluxos de dados massivos, permitindo a tomada de decisões mais rápidas e inteligentes.",
    "habilidades": "Python, Java, C++, TensorFlow, PyTorch, React, Arquitetura de software, Desenvolvimento de APIs",
  }
]
```

#

#### Registrar um projeto

```http
POST /projeto/registro
```

Request body:

```javascript
{
  "nome": string,
  "descricao": string,
  "habilidades": string,
  "cargos": [
    string
  ]
}
```

Response:

```javascript
{
  "codprojeto": string || null,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "nome": "IA Core",
  "descricao": "O IA Core poderia ser a unidade central de processamento de um sistema de IA, responsável pelas decisões mais complexas e pela coordenação de outros componentes.",
  "habilidades": "Algoritmos, estruturas de dados, aprendizado de máquina, redes neurais, Cálculo, álgebra linear, estatística, Conhecimento profundo sobre a área de aplicação da IA (ex: saúde, finanças, etc.)."
  "cargos": [
   "erfj9sj4-sdk4-s3g6-dgy6-4rgdsw3a7j1s"
  ]
}
```

```javascript
{
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",
  "status": true,
  "message": "Registro Inserido"
}
```

#

#### Registrar um cargo no projeto

```http
POST /projeto/cargo/registro
```

Request body:

```javascript
{
  "codcargo": string,
  "codprojeto": string,
}
```

Response:

```javascript
{
  "codprojetocargo": string || null,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codprojetocargo": "kllz02ls-9hjw-aib3-phgq-l9gk3fmaç20c",
  "codcargo": "cnsiduen-hr7f-fj8w-ds9f-vjsfsef4fds6",
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",
}
```

```javascript
{
  "codprojetocargo": "kllz02ls-9hjw-aib3-phgq-l9gk3fmaç20c",
  "status": true,
  "message": "Registro Inserido"
}
```

#

#### Editar um projeto

```http
PUT /projeto/edit?codProjeto=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do projeto a ser editado |

Request body:

```javascript
{
  "nome": string,
  "descricao": string,
  "habilidades": string,
  "cargos": [
    string
  ]
}
```

Response:

```javascript
{
  "codprojeto": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "nome": "IA Core",
  "descricao": "O IA Core será a unidade central de processamento de um sistema de IA, responsável pelas decisões mais complexas e pela coordenação de outros componentes.",
  "habilidades": "Algoritmos, estruturas de dados, aprendizado de máquina, redes neurais, Cálculo, álgebra linear, estatística, Conhecimento profundo sobre a área de aplicação da IA (ex: saúde, finanças, etc.).",
  "cargos": [
   "erfj9sj4-sdk4-s3g6-dgy6-4rgdsw3a7j1s"
  ]
}
```

```javascript
{
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",
  "status": true,
  "message": "Registro Atualizado"
}
```

#

#### Editar um cargo do projeto

```http
PUT /projeto/cargo/edit?codProjetoCargo=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do cargo do projeto a ser editado |

Request body:

```javascript
{
  "codcargo": string,
  "codprojeto": string,
}
```

Response:

```javascript
{
  "codprojetocargo": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codcargo": "miopsdfv-nxy7-9rd3-cu8q-uhsdfgb8hu34",
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",
}
```

```javascript
{
  "codprojetocargo": "kllz02ls-9hjw-aib3-phgq-l9gk3fmaç20c",
  "status": true,
  "message": "Registro Atualizado"
}
```

#

#### Deletar um projeto

```http
DELETE /projeto/delete?codProjetoCargo=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do projeto a ser removido |

Response:

```javascript
{
  "codprojeto": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",
  "status": true,
  "message": "Registro Excluído"
}
```

#

#### Deletar um cargo do projeto

```http
DELETE /projeto/cargo/delete?codProjeto=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do cargo do projeto a ser removido |

Response:

```javascript
{
  "codprojeto": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codprojeto": "kllz02ls-9hjw-aib3-phgq-l9gk3fmaç20c",
  "status": true,
  "message": "Registro Excluído"
}
```

#

# Proposta

#### Listar todas as propostas

```http
GET /proposta/list
```

Response:

```javascript
{
  "proposta": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codproposta": "jsd894jf-d74h-bmt4-sh73-tyu9xc82nae6",
    "oferta": 1700,
    "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: Análise e Definição de Requisitos, Arquitetura e Design, Implementar os componentes do IA Core utilizando linguagens de programação como Python, C++ ou Java e Garantir a qualidade do código através de testes unitários e de integração.",
    "duracao_estimada": 12,
    "codprojetocargo": "9a4fcd71-cb10-4e01-983a-d155264a4000", 
    "codprojeto": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4", 
    "nome": "Rafael", 
    "email": "rafael@gmail.com", 
    "telefone": "+55 (12) 92212-5311", 
  },
  {
    "codproposta": "e6dxgq73-vba8-rebn-ans8-anxy8sb36c8a",
    "oferta": 2000,
    "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: Trabalhar em conjunto com a equipe para definir os requisitos funcionais e não funcionais do IA Core, Elaborar um documento de requisitos detalhado, identificando as funcionalidades essenciais, as métricas de desempenho e as integrações necessárias, Desenvolver a arquitetura do sistema, escolhendo as tecnologias e ferramentas mais adequadas para cada componente e Criar diagramas e fluxogramas para visualizar a lógica do sistema e facilitar a comunicação com a equipe.",
    "duracao_estimada": 6,
    "codprojetocargo": "352223rf-adff-asdf-34td-sdfg4w5gsdfg",
    "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",  
    "nome": "Luca", 
    "email": "luca@gmail.com", 
    "telefone": "+55 (15) 93532-6584", 
  },
  {
    "codproposta": "shdhv836-vra8-j68i-dfy7-lghj5d6s4fsr",
    "oferta": 1500,
    "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: As métricas de desempenho e as integrações necessárias, Desenvolver a arquitetura do sistema, escolhendo as tecnologias e ferramentas mais adequadas para cada componente e Criar diagramas e fluxogramas para visualizar a lógica do sistema e facilitar a comunicação com a equipe.",
    "duracao_estimada": 2,
    "codprojetocargo": "352223rf-adff-asdf-34td-sdfg4w5gsdfg",
    "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",  
    "nome": "Julio", 
    "email": "julio@gmail.com", 
    "telefone": "+55 (15) 34566-7457",
  }
]
```

#

#### Listar todos as propostas do projeto

```http
GET /proposta/list/projeto?codProjeto=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do projeto para procurar as proposta a ser mostrado |

Response:

```javascript
{
  "proposta": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codproposta": "e6dxgq73-vba8-rebn-ans8-anxy8sb36c8a",
    "oferta": 2000,
    "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: Trabalhar em conjunto com a equipe para definir os requisitos funcionais e não funcionais do IA Core, Elaborar um documento de requisitos detalhado, identificando as funcionalidades essenciais, as métricas de desempenho e as integrações necessárias, Desenvolver a arquitetura do sistema, escolhendo as tecnologias e ferramentas mais adequadas para cada componente e Criar diagramas e fluxogramas para visualizar a lógica do sistema e facilitar a comunicação com a equipe.",
    "duracao_estimada": 6,
    "codprojetocargo": "352223rf-adff-asdf-34td-sdfg4w5gsdfg",
    "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",  
    "nome": "Luca", 
    "email": "luca@gmail.com", 
    "telefone": "+55 (15) 93532-6584", 
  },
  {
    "codproposta": "shdhv836-vra8-j68i-dfy7-lghj5d6s4fsr",
    "oferta": 1500,
    "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: As métricas de desempenho e as integrações necessárias, Desenvolver a arquitetura do sistema, escolhendo as tecnologias e ferramentas mais adequadas para cada componente e Criar diagramas e fluxogramas para visualizar a lógica do sistema e facilitar a comunicação com a equipe.",
    "duracao_estimada": 2,
    "codprojetocargo": "9a4fcd71-cb10-4e01-983a-d155264a4000",
    "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",  
    "nome": "Julio", 
    "email": "julio@gmail.com", 
    "telefone": "+55 (15) 34566-7457", 
  },
]
```

#

#### Ver uma única proposta

```http
GET /proposta/list?codProposta=${codproposta}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codproposta` | `string` | **Required**. Código da proposta a ser procurado |

Response:

```javascript
{
  "proposta": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codproposta": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
    "oferta": 1700,
    "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: Análise e Definição de Requisitos, Arquitetura e Design, Implementar os componentes do IA Core utilizando linguagens de programação como Python, C++ ou Java e Garantir a qualidade do código através de testes unitários e de integração.",
    "duracao_estimada": 12,
    "codprojetocargo": "9a4fcd71-cb10-4e01-983a-d155264a4000",
    "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",   
    "nome": "Rafael", 
    "email": "rafael@gmail.com", 
    "telefone": "+55 (12) 92212-5311", 
  }
]
```

#

#### Registrar uma proposta

```http
POST /proposta/registro
```

Request body:

```javascript
{
  "oferta": number,
  "descricao": string,
  "duracao_estimada": number,
  "codprojetocargo": string, 
  "codprojeto": string,
  "nome": string, 
  "email": string, 
  "telefone": string, 
}
```

Response:

```javascript
{
  "codproposta": string || null,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codproposta": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
  "oferta": 1700,
  "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: Análise e Definição de Requisitos, Arquitetura e Design, Implementar os componentes do IA Core utilizando linguagens de programação como Python, C++ ou Java e Garantir a qualidade do código através de testes unitários e de integração.",
  "duracao_estimada": 12,
  "codprojetocargo": "9a4fcd71-cb10-4e01-983a-d155264a4000",
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",   
  "nome": "Rafael", 
  "email": "rafael@gmail.com", 
  "telefone": "+55 (12) 92212-5311", 
}
```

```javascript
{
  "codproposta": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",
  "status": true,
  "message": "Registro Inserido"
}
```

#

#### Editar uma proposta

```http
PUT /proposta/edit?codProposta=${codproposta}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codproposta` | `string` | **Required**. Código do proposta a ser editado |

Request body:

```javascript
{
  "oferta": number,
  "descricao": string,
  "duracao_estimada": number,
  "codprojetocargo": string, 
  "codprojeto": string,
  "nome": string, 
  "email": string, 
  "telefone": string, 
}
```

Response:

```javascript
{
  "codproposta": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codproposta": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
  "oferta": 1700,
  "descricao": "Como freelancer especializado em inteligência artificial, ofereço as seguintes contribuições para o projeto IA Core: Arquitetura e Design, Implementar os componentes do IA Core utilizando linguagens de programação como Python, C++ ou Java e Garantir a qualidade do código através de testes unitários e de integração.",
  "duracao_estimada": 12,
  "codprojetocargo": "9a4fcd71-cb10-4e01-983a-d155264a4000",
  "codprojeto": "7fgd78y3-a6rj-kc89-a7sh-zjd8we4hj47v",    
  "nome": "Rafael", 
  "email": "rafael@gmail.com", 
  "telefone": "+55 (12) 92212-5311", 
}
```

```javascript
{
  "codproposta": "ed72js9a-9g72-ajkx-13kd-isa8d3hs9sj4",
  "status": true,
  "message": "Registro Atualizado"
}
```

#

#### Deletar uma proposta

```http
DELETE /proposta/delete?codProjeto=${codprojeto}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codprojeto` | `string` | **Required**. Código do projeto para saber qual proposta a ser removido |

Response:

```javascript
{
  "codproposta": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codproposta": "e6dxgq73-vba8-rebn-ans8-anxy8sb36c8a",
  "status": true,
  "message": "Registro Excluído"
}
```

#

# Cargo

#### Listar todos os cargo

```http
GET /cargo/list
```

Response:

```javascript
{
  "cargo": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codcargo": "cnsiduen-hr7f-fj8w-ds9f-vjsfsef4fds6",
    "nome": "Desing",
  },
  {
    "codcargo": "asdowede-sn34-sdf4-fw3d-dfgm8aijsd95",
    "nome": "Marketing",
  }
]
```

#### Ver um único cargo

```http
GET /cargo/list?nomeCargo=${cargo_nome}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cargo_nome` | `string` | **Required**. Nome do cargo a ser mostrado |

Response:

```javascript
{
  "cargo": []object || null
}
```

Exemplo:

```javascript
[
  {
    "codcargo": "cnsiduen-hr7f-fj8w-ds9f-vjsfsef4fds6",
    "nome": "Desing",
  }
]
```

#

#### Registrar um Cargo

```http
POST /cargo/registro
```

Request body:

```javascript
{
  "cargo_nome": string,
}
```

Response:

```javascript
{
  "codcargo": string || null,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "cargo_nome": "Desenvolvedor"
}
```

```javascript
{
  "codcargo": "erfj9sj4-sdk4-s3g6-dgy6-4rgdsw3a7j1s",
  "status": true,
  "message": "Registro Inserido"
}
```

#

#### Editar um cargo

```http
PUT /cargo/edit?codCargo=${codcargo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codcargo` | `string` | **Required**. Código do cargo a ser editado |

Request body:

```javascript
{
  "cargo_nome": string,
}
```

Response:

```javascript
{
    "codcargo": string || error,
    "status": true || false,
    "message": string
}
```

Exemplo:

```javascript
{
  "cargo_nome": string,
}
```

```javascript
{
  "codcargo": "erfj9sj4-sdk4-s3g6-dgy6-4rgdsw3a7j1s",
  "status": true,
  "message": "Registro Atualizado"
}
```

#

#### Deletar um cargo

```http
DELETE /cargo/delete?codCargo=${codcargo}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `codcargo` | `string` | **Required**. Código do cargo a ser removido |

Response:

```javascript
{
  "codcargo": string || error,
  "status": true || false,
  "message": string
}
```

Exemplo:

```javascript
{
  "codcargo": "erfj9sj4-sdk4-s3g6-dgy6-4rgdsw3a7j1s",
  "status": true,
  "message": "Registro Excluído"
}
```

#

## Feito por:

* <a href="https://github.com/devraffles"> Rafael dos Santos Giorgi </a> - Dev Fullstack
* <a href="https://github.com/Kaua-programin"> Kauã Hipólito Rodrigues </a> - Dev Front-End
* <a href="https://github.com/LucaLevanteze"> Luca Silva Levanteze </a> - UI/UX Designer & Dev Front-End
