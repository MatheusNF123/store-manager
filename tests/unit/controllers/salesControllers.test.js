const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");


const { expect } = chai
chai.use(sinonChai);

const { saleServices } = require("../../../src/services");
const {mockResolvedSale, mockSaleProduct
} = require("./mocks/sales.controller.mock");
const {salesController} = require('../../../src/controllers')
describe('Teste de unidade do passengerController', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('listando todos os prodtos', async function () {
    try {
      const req = { body: mockSaleProduct };
     
      const res = {};
      res.status = sinon.stub().returns();
      res.json = sinon.stub().returns();
       sinon
         .stub(saleServices, "registrationSale")
         .resolves({ status: 201, message: mockResolvedSale });
      await salesController.salesRegistration(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(mockResolvedSale);
    } catch (e) {
      
    }
  })
 
 })