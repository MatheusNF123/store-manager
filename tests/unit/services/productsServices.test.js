const chai = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const { expect } = chai;

const { productServices } = require('../../../src/services')
const { productModel } = require("../../../src/models");
const { allProduct, errorId } = require("./mocks/products.services.mock");
describe("Teste de unidade do productServices", function () {
  this.afterEach(function () {
    sinon.restore();
  });
  it("Bucando todos os produtos", async function () {
    sinon.stub(productModel, "getProducts").resolves(allProduct);
    const results = await productServices.getAllProducts();
    const produtosMocks = { status: 200, message: allProduct };
    expect(results).to.deep.equal(produtosMocks);
  });
  it("Bucando produto pelo id", async function () {
    sinon.stub(productModel, "findProductId").resolves(allProduct[0]);
    const result = await productServices.findProductId(1);
    const produtosMocks = { status: 200, message: allProduct[0] };
    expect(result).to.deep.equal(produtosMocks);
  });
  it("Bucando produto pelo id errado", async function () {
    try {      
      sinon.stub(productModel, "findProductId").resolves(undefined);
      await productServices.findProductId(errorId);
    }catch(error){
      const erroMock = { status: 404, message: "Product not found" };
      expect(error).to.deep.equal(erroMock);
      }
  });
});