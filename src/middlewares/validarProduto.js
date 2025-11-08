export default function validarProduto(req, res, next) {
  const { nome, categoria } = req.body;
  if (!nome || !categoria) {
    return res.status(400).json({ erro: 'Nome e categoria são obrigatórios!' });
  }
  next();
}
