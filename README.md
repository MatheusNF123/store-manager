<h1>Store Manager</h1>

 <p>Uma Api de Sistema de gerenciamento de vendas no formato dropshipping desenvolvida em node-js, utilizando a arquitetura MSC (model-service-controller) e um banco de dados MySQL para gestão de dados. Nela em que é possível criar, visualizar, deletar e atualizar produtos e vendas.</p>
 
 
 <summary><strong>Imagens Exemplo</strong></summary>

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

## Autor 
- [Matheus](https://github.com/MatheusNF123)
