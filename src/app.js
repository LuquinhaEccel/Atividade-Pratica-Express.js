import express from 'express';
import produtosRoutes from './routes/produtosRoutes.js';
import logMiddleware from './middlewares/logMiddleware.js';
import errorMiddleware from './middlewares/errorMiddleware.js';

const app = express();
app.use(express.json());
app.use(logMiddleware);
app.use('/produtos', produtosRoutes);
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
