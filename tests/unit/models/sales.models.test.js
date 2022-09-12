const chai = require("chai");
const sinon = require("sinon");
const connection = require('../../../src/models/connection')

const { expect } = chai

const { salesModel } = require("../../../src/models");
const {mockSaleProduct, fCall, mockAllSales, mockSaleID} = require('./mocks/sales.model.mock')

describe('Teste de unidade do salesModel', function () {
  afterEach(function () {
    sinon.restore()
  })
  it("inseriando um sale com sales.getAllSalesProducts e sales.registrationSaleProduct", async function () {
    sinon.stub(connection, "execute").resolves([mockSaleProduct[0]]);

    await salesModel.registrationSaleProduct(1, fCall);
    const result = await salesModel.getAllSalesProducts();

    expect([result]).to.deep.equals(fCall);
  });
  it('inseriando um sale com sales.registrationSale', async function () {
    sinon.stub(connection, "execute").resolves([{insertId: 1}]);
    const result = await salesModel.registrationSale();   
    expect(result).to.be.equals(1);
  })

  it("Listando todas as vendas", async function () {
    sinon.stub(connection, "execute").resolves([mockAllSales]);
    const result = await salesModel.getAllSales();
    expect(mockAllSales).to.deep.equal(result);
  });
  it("Listando vendas pelo ID", async function () {
    sinon.stub(connection, "execute").resolves([mockSaleID]);
    const result = await salesModel.findSaleId(1);
    expect(mockSaleID).to.deep.equal(result);
  });

   it("Deleta um produto", async function () {
     sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
     const result = await salesModel.deleteSaleId(1);
     expect(result).to.equal(1);
   });

 })
