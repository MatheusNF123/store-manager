const chai = require("chai");
const sinon = require("sinon");
const connection = require('../../../src/models/connection')

const { expect } = chai

const { productModel } = require("../../../src/models");
const {
  allProduct,
  produtoRegistrado,
  produto,
  updateProduct,
  returnUpdateProduct
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
 })
