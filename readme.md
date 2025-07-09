# NLW Agents - Rocketseat

Este projeto foi desenvolvido durante o evento online **NLW Agents** promovido pela [Rocketseat](https://rocketseat.com.br/). Ele consiste em uma API para gerenciamento de salas, utilizando tecnologias modernas do ecossistema Node.js e PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Fastify**
- **Zod**
- **Drizzle ORM**
- **PostgreSQL** (com extensão pgvector)
- **Docker** (para banco de dados)
- **drizzle-seed** (seed de dados)
- **@biomejs/biome** (lint/format)
- **ultracite** (configuração de lint)

## Estrutura do Projeto

- `src/` - Código-fonte da aplicação
  - `env.ts` - Validação das variáveis de ambiente
  - `server.ts` - Inicialização do servidor Fastify
  - `database/` - Configuração, seed, migrations e schemas do banco de dados
  - `http/routes/` - Rotas da API
- `docker/` - Scripts de inicialização do banco de dados
- `client.http` - Exemplos de requisições HTTP
- `.env.example` - Exemplo de variáveis de ambiente

## Como iniciar o projeto

### 1. Clone o repositório

```sh
git clone <url-do-repo>
cd server-nlw-agent
```

### 2. Instale as dependências

```sh
npm install
```

### 3. Configure as variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e ajuste se necessário:

```sh
cp .env.example .env
```

### 4. Suba o banco de dados com Docker

```sh
docker compose up -d
```

### 5. Rode as migrations e o seed

```sh
npm run db:seed
```

### 6. Inicie o servidor em modo desenvolvimento

```sh
npm run dev
```

O servidor estará disponível em `http://localhost:3333`.

## Comandos Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento (com watch)
- `npm start` - Inicia o servidor em modo produção
- `npm run db:seed` - Reseta e popula o banco de dados com dados de exemplo

## Testando a API

Você pode utilizar o arquivo [`client.http`](client.http) para testar as rotas utilizando o VS Code ou ferramentas como o [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

---

Projeto criado durante o evento **NLW Agents**