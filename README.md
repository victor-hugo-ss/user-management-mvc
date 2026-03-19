# Userbase

Aplicação web para gerenciamento de usuários desenvolvida com Node.js e Express.

## Tecnologias

- Node.js
- Express
- MySQL2
- Sequelize
- Express-Handlebars
- Nodemon
- Prettier
- Dotenv

## Funcionalidades

- Cadastrar usuário
- Listar usuários
- Ver detalhes do usuário
- Editar usuário
- Excluir usuário

## Como executar

### Pré-requisitos

- Node.js instalado
- MySQL instalado e rodando

### Instalação

# Clone o repositório

git clone https://github.com/seu-usuario/seu-repositorio.git

# Entre na pasta

cd seu-repositorio

# Instale as dependências

npm install

### Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

DB_HOST=localhost
DB_PORT=3306
DB_NAME=userbase
DB_USER=seu_usuario
DB_PASS=sua_senha

### Inicie a aplicação

npm start

A aplicação estará disponível em `http://localhost:3000`

## Estrutura de pastas

├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── UserController.js
│ ├── models/
│ │ └── User.js
│ ├── public/
│ │ └── css/
│ │ └── style.css
│ ├── routes/
│ │ └── usersRoutes.js
│ ├── views/
│ │ ├── layouts/
│ │ │ └── main.handlebars
│ │ ├── users/
│ │ │ ├── all.handlebars
│ │ │ ├── create.handlebars
│ │ │ ├── edit.handlebars
│ │ │ ├── home.handlebars
│ │ │ └── user.handlebars
│ └── index.js
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md
