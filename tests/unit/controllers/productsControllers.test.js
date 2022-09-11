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
        //  const result = await productServices.registrationProduct(produto);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(produtoRegistrado);

  })
  
 })