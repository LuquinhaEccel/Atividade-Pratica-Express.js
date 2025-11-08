import express from 'express';
import validarProduto from '../middlewares/validarProduto.js';

const router = express.Router();

let produtos = [
  { id: 1, nome: 'Notebook', categoria: 'eletrônicos' },
  { id: 2, nome: 'Camiseta', categoria: 'vestuário' },
  { id: 3, nome: 'Fone Bluetooth', categoria: 'eletrônicos' }
];

router.get('/', (req, res) => {
  const { categoria } = req.query;
  if (categoria) {
    const filtrados = produtos.filter(p => p.categoria === categoria);
    return res.json(filtrados);
  }
  res.json(produtos);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const produto = produtos.find(p => p.id == id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
  res.json(produto);
});

router.post('/', validarProduto, (req, res) => {
  const novo = req.body;
  novo.id = produtos.length + 1;
  produtos.push(novo);
  res.status(201).json(novo);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  produtos = produtos.filter(p => p.id != id);
  res.json({ mensagem: 'Produto removido com sucesso!' });
});

export default router;
