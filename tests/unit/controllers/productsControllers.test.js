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
    try {
      
      const req = {};
      const res = {};
      res.status = sinon.stub().returns();
      res.json = sinon.stub().returns(allProduct);
       sinon
         .stub(productServices, "getAllProducts")
         .resolves({ status: 200, message: allProduct });
      await productController.product(req, res)
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(allProduct);
    } catch (e) {
      
    }
  })
  it('listando os prodtos por id', async function () {
    try {
      const obj = allProduct[0];
      const params = {id: 1}
      const req = { params };
      const res = {};
      res.status = sinon.stub().returns();
      res.json = sinon.stub().returns(obj);
       sinon
         .stub(productServices, 'findProductId')
         .resolves({ status: 200, message: obj });
      await productController.productId(req, res)
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(obj);
    } catch (e) {
      // ''
    }
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