const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");


const { expect } = chai
chai.use(sinonChai);

const { saleServices } = require("../../../src/services");
const {
  mockResolvedSale,
  mockSaleProduct,
  mockAllSales,
  mockSaleID,
  mockUpdateSale,
  mockUpdateASalesResolved
} = require("./mocks/sales.controller.mock");
const {salesController} = require('../../../src/controllers')
describe('Teste de unidade do passengerController', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('listando todos os prodtos', async function () {
   
      const req = { body: mockSaleProduct };
     
      const res = {};
      res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns()
       sinon
         .stub(saleServices, "registrationSale")
         .resolves({ status: 201, message: mockResolvedSale });
      await salesController.salesRegistration(req, res, next);
      expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(mockResolvedSale);
   expect(next).to.have.not.been.called;
   
  })
  it('testando o erro do next', async function () {
   
      const req = { body: mockSaleProduct };
     
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const next = sinon.stub().returns()
      const mockError = { status: 404, message: "Product not found" };
       sinon
         .stub(saleServices, "registrationSale")
         .throws(mockError);
      await salesController.salesRegistration(req, res, next);
    expect(next).to.have.been.calledWith(mockError);
   
  })
  it('listando todos os as vendas e entregando o resultado', async function () {
   
      const req = {};     
      const res = {};
      res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
       sinon
         .stub(saleServices, "getAllSales")
         .resolves({ status: 200, message: mockAllSales });
      await salesController.getAllSales(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockAllSales);
    
  })
  it('listando as venda por Id', async function () {
      const params = {id: 1}
      const req = { params };     
      const res = {};
      res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
       sinon
         .stub(saleServices, "findSaleId")
         .resolves({ status: 200, message: mockSaleID });
      await salesController.saleId(req, res, next);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mockSaleID);
    
  })

  it("testando o erro do next ao tentar buscar uma venda por id errado", async function () {
      const params = { id: 1 };
      const req = { params };
      const res = {};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      const next = sinon.stub().returns();
      const err = { status: 404, message: "Sale not found" };
      sinon.stub(saleServices, "findSaleId").throws(err);
      await salesController.saleId(req, res, next);
      expect(next).to.have.been.calledWith(err);
  });
  
  it("testando se a fun????o responde com status 204 em caso de sucesso ao deletar uma venda", async function () {
    const params = { id: 1 };
    const req = { params };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
    sinon.stub(saleServices, "deleteSaleId").resolves({ status: 204 });
    await salesController.deleteSale(req, res, next);
    expect(res.status).to.have.been.calledWith(204);
  });
  it("testando se a fun????o responde com status 200 em caso de sucesso ao atualizar uma venda e retorna para o usuario", async function () {
    const params = { id: 1 };
    const body = mockUpdateSale;
    const req = { body, params };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const next = sinon.stub().returns();
    sinon
      .stub(saleServices, "updateSaleId")
      .resolves({ status: 200, message: mockUpdateASalesResolved });
    await salesController.updateSale(req, res, next);
    expect(res.status).to.have.been.calledWith(200);
     expect(res.json).to.have.been.calledWith(mockUpdateASalesResolved);
  });

   it("testando o erro do next ao tentar atualizar uma venda por id ou produtoid errado", async function () {
     const params = { id: 99999 };
     const body = mockUpdateSale;
     const req = { body, params };
     const res = {};
     res.status = sinon.stub().returns(res);
     res.json = sinon.stub().returns();
     const next = sinon.stub().returns();
     const err = { status: 404, message: "Sale not found" };
     sinon.stub(saleServices, "updateSaleId").throws(err);
     await salesController.updateSale(req, res, next);
     expect(next).to.have.been.calledWith(err);
   });
  
 
 })