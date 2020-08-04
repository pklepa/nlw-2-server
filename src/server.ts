import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// GET: Buscar ou listar uma info
// POST: Criar alguma nova info
// PUT: Atualizar uma info existente
// DELETE: Deletar uma info existente

// Corpo (Request body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

// Ouve requisicoes HTTP
// Porta 3333 escolhida arbitrariamente
