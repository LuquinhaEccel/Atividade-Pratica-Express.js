export default function errorMiddleware(err, req, res, next) {
  console.error('🔥 Erro detectado:', err.message);
  res.status(500).json({ erro: 'Erro interno no servidor.' });
}
