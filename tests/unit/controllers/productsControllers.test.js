const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");


const { expect } = chai
chai.use(sinonChai);

const { productServices } = require("../../../src/services");
const {
  allProduct,
  produtoRegistrado,
  produto,
  returnUpdateProduct,
  updateProduct,
  returnAllSearch,
  returnOneSearch
} = require("./mocks/products.controller.mock");
const {productController} = require('../../../src/controllers')
describe('Teste de unidade do passengerController', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('listando todos os prodtos', async function () {       
      const req = {};
      const res = {};
      res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
  
       sinon
         .stub(productServices, "getAllProducts")
         .resolves({ status: 200, message: allProduct });
      await productController.product(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(allProduct);
  
  })
  it('listando os produtos por id', async function () {
 
      const obj = allProduct[0];
      const params = {id: 1}
      const req = { params };
      const res = {};
      res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
      const next = sinon.stub().returns();
       sinon
         .stub(productServices, 'findProductId')
         .resolves({ status: 200, message: obj });
      await productController.productId(req, res, next);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(obj);
   
  })
  it('testando a função next quando occore um erro ao buscar um produto por id', async function () {
 
      const obj = allProduct[0];
      const params = {id: 300}
      const req = { params };
      const res = {};
      res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
    const erro = { status: 404, message: "Product not found" };
       sinon.stub(productServices, "findProductId").throws(erro);
      await productController.productId(req, res, next);
      expect(next).to.have.been.calledWith(erro);
   
  })
  it('cadastrando um produto', async function () {
   
      const req = {body: {name: 'ProdutoX'}};
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    
       sinon
         .stub(productServices, "registrationProduct")
         .resolves({ status: 201, message: produtoRegistrado });
         await productController.productRegistration(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(produtoRegistrado);

  })

    it('verificando se o produto foi atualizado', async function () {
    const params = { id: 1 }
    const body = updateProduct;
      const req = { params, body };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
       sinon
         .stub(productServices, "updateProductId")
         .resolves({ status: 200, message: returnUpdateProduct });
         await productController.productUpdate(req, res, next);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(returnUpdateProduct);

  })
  
  
  it("testando a função next quando ocore um erro ao atualizar um produto por id", async function () {
    const params = { id: 1 };
    const body = updateProduct;
    const req = { params, body };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
    const erro = { status: 404, message: "Product not found" };
    sinon.stub(productServices, "updateProductId").throws(erro);
    await productController.productUpdate(req, res, next);
    expect(next).to.have.been.calledWith(erro);
  });
  it("testando se a função responde com status 204 em caso de sucesso ao deletar um produto", async function () {
    const params = { id: 1 };
    const req = { params};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
    sinon.stub(productServices, "deleteProductId").resolves({status: 204});
    await productController.productDelete(req, res, next);
    expect(res.status).to.have.been.calledWith(204);
  });

   it("testando se retorna todos os produtos caso a query nao seja passada", async function () {
     const query = { q: '' };
     const req = { query};
     const res = {};
     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();
     const next = sinon.stub().returns();
     sinon.stub(productServices, "getProductSearch").resolves({ status: 200, message: returnAllSearch });
     await productController.productSeach(req, res, next);
     expect(res.status).to.have.been.calledWith(200);
     expect(res.json).to.have.been.calledWith(returnAllSearch);
   });
   it("testando se retorna o produto quer for passado na query", async function () {
     const query = { q: 'Martelo' };
     const req = { query};
     const res = {};
     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();
     const next = sinon.stub().returns();
     sinon
       .stub(productServices, "getProductSearch")
       .resolves({ status: 200, message: returnOneSearch });
     await productController.productSeach(req, res, next);
     expect(res.status).to.have.been.calledWith(200);
     expect(res.json).to.have.been.calledWith(returnOneSearch);
   });
  
})