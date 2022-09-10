const chai = require("chai");
const sinon = require("sinon");
const connection = require('../../../src/models/connection')

const { expect } = chai

const { productModel } = require("../../../src/models");
const {allProduct} = require('./mocks/products.model.mock')

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
 })
