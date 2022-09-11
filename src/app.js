const express = require('express');
const { productRoutes, salesRoutes } = require('./routers');
const errorMiddlewares = require('./middlewares/errorMiddlewares');

const app = express();
app.use(express.json());
// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productRoutes);
app.use('/sales', salesRoutes);

app.use(errorMiddlewares);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;