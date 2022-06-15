## Aplicação desenvolvida para avaliação técnica para vaga frontend na Shopper.

**Features:**

 - Cadastro de pedidos com nome de usuário, data de retirada e lista de compras;
- Adição e/ou remoção de produtos do carrinho;
- Atualização do valor total do carrinho de acordo com as ações;
- Persistência dos dados no banco de dados sql;
- Atualização do estoque;

**Tecnologias:**

- sql
- node.js

**Pré-requisitos:**
Ter instalado na máquina o mysql, node.js e git.
 
**Rodando o backend:**
Clone o repositório, disponibilizado exclusivamente para construção deste projeto Front-End:

    $ git clone https://github.com/karlanatany/shopperApp.git

Acesse a pasta do projeto no terminal/cmd:

    $ cd shopperApp
    $ cd backend

Acesse o projeto via VSCode:

$ code .

Instale as dependências:

    $ npm install

Crie as tabelas:

    $ npm run migrations

Execute o script start

    $ npm start

O servidor iniciará na porta: 3030.

**Rodando o frontend:**
Acesse a pasta do projeto no terminal/cmd:

    $ cd shopperApp
    $ cd backend

Acesse o projeto via VSCode:

    $ code .

Instale as dependências:

    $ npm install
Starte o projeto:

    $ npm start

