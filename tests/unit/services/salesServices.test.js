const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;

const { saleServices } = require('../../../src/services')
const { salesModel, productModel } = require("../../../src/models");
const {fCall, mockSaleProduct, fCallError} = require("./mocks/sales.services.mock");
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
  
});