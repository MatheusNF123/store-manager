const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;

const { saleServices } = require('../../../src/services')
const { salesModel, productModel } = require("../../../src/models");
const {fCall, mockSaleProduct, fCallError, mockAllSales, mockSaleID } = require("./mocks/sales.services.mock");
describe("Teste de unidade do saleServices", function () {
  afterEach(function () {
    sinon.restore();
  });
  it("cadastrando uma venda", async function () {
    sinon.stub(productModel, "findProductId").resolves(fCall);
    sinon.stub(salesModel, "registrationSale").resolves([{ insertId: 1 }]);
    const result = await salesModel.registrationSale()
    sinon.stub(salesModel, "registrationSaleProduct").resolves(result, fCall);
    await salesModel.registrationSaleProduct(result, fCall);
    const results = await saleServices.registrationSale(fCall);
    const produtosMocks = { status: 201, message: {id: result, itemsSold: fCall} };
    expect(results).to.deep.equal(produtosMocks);
  });
 
  it("tantando cadastrar uma venda com id errado", async function () {
    try {
      sinon.stub(productModel, "findProductId").resolves(undefined);
      const a = await saleServices.registrationSale([fCallError]);  
    } catch (e) {
       const mockError = { status: 404, message: "Product not found" };
       expect(mockError.message).to.deep.equal(e.message);
    }
     
  })
  
   it("buscando todas as vendas", async function () {
     sinon.stub(salesModel, "getAllSales").resolves(mockAllSales);
     const result = await saleServices.getAllSales();
     const salesMocks = {
       status: 200,
       message: mockAllSales,
     };
     expect(result).to.deep.equal(salesMocks);
   });
   it("buscando as vendas por ID", async function () {
     sinon.stub(salesModel, "findSaleId").resolves(mockSaleID);
     const result = await saleServices.findSaleId(1);
     const salesMocks = {
       status: 200,
       message: mockSaleID,
     };
     expect(result).to.deep.equal(salesMocks);
   });
  
  it("buscando uma venda inexistente", async function () {
    try {
      sinon.stub(salesModel, "findSaleId").resolves([]);
      await saleServices.findSaleId(999);       
    } catch (e) {
      const salesMocks = {
        status: 404,
        message: "Sale not found",
      };
      expect(e.message).to.deep.equal(salesMocks.message);
      
    }
   });
  
  
});