# PREFEITURA - FRONT-END - ANGULAR

Grupo G:

- Ana Sofia Nunes de Abreu
- Bruno Vieira Campos Gouveia
- Rafael Kimihiro Moribe
- Tiago Vieira Cavalcante

## Intro

Esse projeto faz parte da 3a entrega para o curso de MBA FIAP, trata-se de um protótipo de front-end em ANGULAR 8.
para simular um portal da prefeitura do Recife, mais clean, direto ao ponto, levando em consideracão as necessidades do usuários.
Foi baseado na última entrega que fizemos em ReactJS, convertido para angular.
Será conectado a um back-end em Node.JS usando Express. Aqui faremos um CRUD para imóveis dos usuários.

## Pré-requisitos

- Devemos ter o Node.JS instalado no computador.
- Caso formos usar o Angular CLI como gerenciador, deve-se ser baixado e instalado,
- Back-end configurado: <https://github.com/brunovcg/>


## Instalar Angular CLI

```shell
 npm install -g @angular/cli 
```

## Instalar dependências

```shell
npm install
```


## Rodar o Projeto

```shell
ng serve --open
```

O projeto vai rodar no localhost:4200 em dev.
Abra [http://localhost:4200] no navegador para visualizar.

## Ferramentas e principais bibliotecas utilizadas

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
