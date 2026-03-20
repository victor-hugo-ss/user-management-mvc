# Userbase

Aplicação web para gerenciamento de usuários desenvolvida com Node.js, Express e MySQL.

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Nodemon](https://nodemon.io/)
- [Prettier](https://prettier.io/)

## Funcionalidades

- ✅ Cadastrar usuário
- ✅ Listar usuários
- ✅ Ver detalhes do usuário
- ✅ Editar usuário
- ✅ Excluir usuário

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MySQL](https://www.mysql.com/) instalado e rodando

## Como executar

### 1. Clone o repositório

```bash
git clone hhttps://github.com/victor-hugo-ss/user-management-mvc.git
cd user-management-mvc.git
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Certifique-se que o MySQL está rodando e crie o banco de dados:

```sql
CREATE DATABASE userbase;
```

> O Sequelize criará as tabelas automaticamente ao iniciar a aplicação.

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```bash
cp .env.example .env
```

Preencha as variáveis:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=userbase
DB_USER=seu_usuario
DB_PASS=sua_senha
```

### 4. Inicie a aplicação

```bash
npm run dev
```

Acesse em [http://localhost:3000](http://localhost:3000)

## Estrutura de pastas

```
├── 📁 src
│   ├── 📁 config
│   │   └── 📄 db.js
│   ├── 📁 controllers
│   │   └── 📄 UserController.js
│   ├── 📁 models
│   │   └── 📄 User.js
│   ├── 📁 public
│   │   └── 📁 css
│   │       └── 🎨 style.css
│   ├── 📁 routes
│   │   └── 📄 usersRoutes.js
│   ├── 📁 views
│   │   ├── 📁 layouts
│   │   │   └── 📄 main.handlebars
│   │   ├── 📁 users
│   │   │   ├── 📄 all.handlebars
│   │   │   ├── 📄 create.handlebars
│   │   │   ├── 📄 edit.handlebars
│   │   │   └── 📄 user.handlebars
│   │   └── 📄 home.handlebars
│   └── 📄 index.js
├── ⚙️ .env.example
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ package-lock.json
└── ⚙️ package.json
```
