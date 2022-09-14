const chai = require("chai");
const sinon = require("sinon");
const connection = require('../../../src/models/connection')

const { expect } = chai

const { productModel } = require("../../../src/models");
const {
  allProduct,
  produto,
  updateProduct,
  mockAllSearch,
  mockSearch,
} = require("./mocks/products.model.mock");

describe('Teste de unidade do productModel', function () {
  this.afterEach(function () {
    sinon.restore()
  })
  it('Bucando todos os produtos', async function () {
    sinon.stub(connection, "execute").resolves([allProduct]);
    const result = await productModel.getProducts()
    expect(result).to.equal(allProduct);
  })
  it('Bucando produto pelo id', async function () {
    sinon.stub(connection, "execute").resolves([[allProduct[0]]]);
    const result = await productModel.findProductId(1)
    expect(result).to.equal(allProduct[0]);
  })
  it('registrando um produto', async function () {
    sinon.stub(connection, "execute").resolves([{insertId: 4}]);
    const result = await productModel.registrationProduct(produto);
    expect(result).to.equal(4);
  })
  it('Atualizando um produto', async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const result = await productModel.updateProductId(1, updateProduct);
    expect(result).to.equal(1);
  })
  it('Deleta um produto', async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const result = await productModel.deleteProductId(1);
    expect(result).to.equal(1);
  })

   it("Bucando todos os produtos caso não passe nenhum parametro na query", async function () {
     sinon.stub(connection, "execute").resolves([mockAllSearch]);
     const result = await productModel.getSearch("");
     expect(result).to.equal(mockAllSearch);
   });
   it("Bucando o produto passado pela query", async function () {
     sinon.stub(connection, "execute").resolves([mockSearch]);
     const result = await productModel.getSearch("Martelo");
     expect(result).to.deep.equal(mockSearch);
   });
   it("Devolver um array vazio caso o parametro passado pela query não exista", async function () {
     sinon.stub(connection, "execute").resolves([[]]);
     const result = await productModel.getSearch("asdasd");
     console.log(result);
     expect([]).to.deep.equal(result);
   });
 })
