# PREFEITURA - FRONT-END - ANGULAR

Grupo G:

- Ana Sofia Nunes de Abreu
- Bruno Vieira Campos Gouveia
- Rafael Kimihiro Moribe
- Tiago Vieira Cavalcante

## Intro

Esse projeto faz parte da 4a entrega para o curso de MBA FIAP, trata-se de um protótipo de front-end em ANGULAR 8, 2 serviços back-end e persistência dos dados em um banco de dados Mongo, instanciados em conteiners para simular um portal da prefeitura do Recife, mais clean, direto ao ponto, levando em consideracão as necessidades do usuários.
Foi baseado na última entrega que fizemos em ReactJS e Django e banco SQLite, convertido nesta atividade para front-end em angular, back-end em node.js e express e banco de dados MongoDB.

As imagens foram publicadas no Docker Hub nos seguintes enderecos:

Front-end Prefeitura

https://hub.docker.com/r/rafaelmoribe/prefeitura-frontend-angular-main

Back-end Cidadãos

https://hub.docker.com/r/rafaelmoribe/prefeitura-backend-cidadaos

Back-end Cidadãos

https://hub.docker.com/r/rafaelmoribe/prefeitura-backend-imoveis



## Pré-requisitos

- Docker Instalado no computador

## Instalar o Docker
Instruções em [Install Docker Engine](https://docs.docker.com/engine/install/).


## Iniciar a criacão das imagens, criação e configuração dos conteiners

```shell
docker-compose up
```

O projeto vai rodar no localhost:4200 em dev.
Abra [http://localhost:4200] no navegador para visualizar a interface de front-end.

## Estrutura de rede

Foi definida a rede node_prefeitura_net no docker para o projeto, onde temos para efeito didático e testes:

- Front-end - Porta [4200](http://localhost:4200)
- Back-end Cidadão - Porta [3000](http://localhost:3000)
- Back-end Imóveis - Porta [3001](http://localhost:3001)
- Banco MongoDB - em 127.0.0.1:27017

Entendemos que para a prática ideal devemos segmentar as redes para não apresentar os serviços de banco e back-end publicamente.

## Provisionamento na nuvem pública

Para esta entrega foi seguida a documentação para utilizar o mesmo docker-compose.yml para provisionar esta aplicação na nuvem, que na nossa atividade foi escolhido a AWS ECS, Elastic Conteiner Service.

Para isso, foi necessário criar um contexto do tipo ecs:

```shell
docker context create ecs contextoecs
docker context use contextoecs
```

Depois de configuradas as variáveis de ambientes para o ambiente [AWS](https://docs.docker.com/cloud/ecs-integration/#requirements), podemos subir os serviços:

```shell
docker compose up
```
O serviço aparecerá no console de gerenciamento do AWS ECS.


## Ferramentas e principais bibliotecas utilizadas no Front-end Angular

- Angular Routing
- Angular Material
- Google Icons
- SCSS (Styles)


## Estrutura

- Organização do código

```txt
  - public: HTML
  - src: código fonte do projeto.
      - assets: arquivos anexos (imagens etc).
      - app
        
        - components: componentes reutilizáveis na aplicação.

        - constants: constantes da aplicação para fácil modificação de regras de negócio.

        - helpers: funções para ajudar no tratamento de dados que pode ser reutilizáveis.

        - pages: componentes que são renderizados como peça principal de cada endpoint.

        - services: centraliza as chamadas da api, com suas configurações.

 - .gitignore: Arquivo que informa ao git quais arquivos e diretórios devem ser ignorados.

 - package.json: Arquivo de configuração do NODE.JS, informa quais as dependências do porjeto, que serão baixadas
  e armazenadas no node_modules.

 - node_modules: Onde são armazenadas libs externas, por ser muito pesado é ignorado pelo GIT, mas com as informações do package.json,
  ao comando este diretório será criado e todas as dependências externas armazenadas aqui.

 - README.md: Este documento, que é a documentação desta aplicação.
```

- Organização dos diretórios:


## O Projeto e suas páginas

obs: Para poder navegar nas páginas que necessitam de autenticacão, fazer o signup e depois o login.

### Página Home

Se o usuário possuir o token, será redirecionado página Session.
Lading page do sistema, aqui o usuário receberá informacões iniciais e poderá ir para a página de Autenticação (Auth)

- Autenticacão
  Esse app faz uso do de autenticacão em sua comunicação com o back-end por meio de token, que é armazenado na session storage.
  Algumas páginas só podem ser acessadas com esse token, obviamente a nível apenas de exibicão, caso tente-se forçar um token no storage, a página pode até
  ser exibida, porém toda requisição importante tera validação de token, que ira retornar um status 401 Unathorazed neste caso.

### Página Auth

Se o usuário possuir o token, será redirecionado página Session.
Nesta página podemos fazer o login ou o registro (signup) do usuário caso não seja registrado.

### Página Session (Protegida)

Se o usuário não possuir o token, será redirecionado página HOME.
Após o login, o usuário será redirecionado para está página. A depender do seu tipo de interesse essa página exibe conteúdo personalizado
Podemos ir até a página de imóveis (buildings)

### Página Buildings (Protegida)

Se o usuário não possuir o token, será redirecionado página HOME.
Aqui o usuário poderá fazer o CRUD dos seus imóveis.
Seus imóveis são listados assim que a página é renderizada.
A partir de um imóvel, pode-se visualizar um boleto para impressão

### Página Billets (Protegida)

Página para visualizar boleto para impressão

### Not Found

Caso o usuário digite um endpoint que não exista, será redirecionado para está página.







## Ferramentas e principais bibliotecas utilizadas no Back-end

- Node.js
- Express


## API Cidadãos

A aplicação de back-end é utilizada para entregar ao front as informações de Cidadão e Imóvel, aplicar regras de cálculo de IPTU em função de área da área construída etc. Dessa forma também é responsável por realiza a persistência no banco de dados.

/api/signup
Cadastro de Cidadão

/api/login
Consulta de existência de cidadão no banco de dados para permitir o login



## API Imóveis



