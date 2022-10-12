<h1>Store Manager</h1>

 <p>Uma Api de Sistema de gerenciamento de vendas no formato dropshipping desenvolvida em node-js, utilizando a arquitetura MSC (model-service-controller) e um banco de dados MySQL para gestão de dados. Nela é possível criar, visualizar, deletar e atualizar produtos e vendas.</p>
 
 
<h2> Imagens Exemplo </h2>

 ![image](https://user-images.githubusercontent.com/99821267/194788076-881969ca-5362-435a-9933-386c95bc22fa.png)


![image](https://user-images.githubusercontent.com/99821267/194788305-e170c0ff-5919-418f-8ceb-b2b5fd3187cc.png)
 

<h2> Instruções da aplicação </h2>

### Rodando aplicação com Docker (arquivo docker-compose foi criado pela Trybe)
```
cd store-manager-project
docker-compose up -d
docker exec -it store_manager bash
npm install
npm run debug

```

### Rodar aplicação sem Docker
```
Crie um arquivo `.env` com sua conexão ao MySQL.
npm install
npm run debug

```

### Rodar os Testes
```
npm run test:mocha
```

<h2>Rotas </h2>

### Produtos
<details>
 <summary>GET /products</summary>
 
- Lista todos os produtos

</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /products/:id</summary>
 
- Listar produto pelo id
</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>POST /products</summary>
 
 - Cadastrar um produto
 - O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
{
  "name": "ProdutoX"
}
```
</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>PUT /products/:id</summary>
 
 - Atualizar um produto
 - O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
{
  "name": "Martelo do Batman"
}
```
</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>DELETE /products/:id</summary>
 
 - Deletar um produto pelo id

</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /products/search</summary>
 
 - Listar produtos baseado na url

</details>

<!-- ------------------------------------------------------------- -->

 <hr>

<!-- ------------------------------------------------------------- -->

### Vendas
<details>
 <summary>POST /sales</summary>
 
 - Cadastrar um produto
 - O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
[
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]
```
</details>

<!-- ------------------------------------------------------------- -->


<details>
 <summary>GET /sales</summary>
 
- Lista todas as vendas

</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /sales/:id</summary>
 
- Listar uma venda pelo id

</details>

<!-- ------------------------------------------------------------- -->

<details>
 <summary>PUT /sales/:id</summary>
 
 - Atualizar uma venda
 - O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
[
  {
    "productId": 1,
    "quantity": 10
  },
  {
    "productId": 2,
    "quantity": 50
  }
]
```
</details>

<!-- ------------------------------------------------------------- -->

<br>

<h2> Tecnologias e bibliotecas usadas </h2>


- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MYSQL](https://www.mysqltutorial.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [Sequelize(ORM)](https://sequelize.org/)
- [Docker](https://www.docker.com/)
- [Joi](https://joi.dev/api/?v=17.6.1)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.npmjs.com/package/chai-express)
- [Sinon](https://sinonjs.org/)



<h2>Autor</h2>

- [Matheus](https://github.com/MatheusNF123)
