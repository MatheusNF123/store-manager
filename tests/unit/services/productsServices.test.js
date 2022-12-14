const chai = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const { expect } = chai;

const { productServices } = require('../../../src/services')
const { productModel } = require("../../../src/models");
const {
  allProduct,
  errorId,
  produto,
  updateProduct,
  mockSearch,
  mockAllSearch
} = require("./mocks/products.services.mock");
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
  it("Bucando produto pelo id errado", async function () {
    try {      
      sinon.stub(productModel, "findProductId").resolves(undefined);
      await productServices.findProductId(errorId);
    }catch(error){
      const erroMock = { status: 404, message: "Product not found" };
      expect(error).to.deep.equal(erroMock);
      }
  });
  it("registrando um produto", async function () {       
    sinon.stub(productModel, "registrationProduct").resolves(4);
    const result =  await productServices.registrationProduct(produto);
    const mockObj = { status: 201, message: { id: 4, ...produto } };
    expect(result).to.deep.equal(mockObj);      
  });
  it("atualizando um produto", async function () {       
    sinon.stub(productModel, "updateProductId").resolves(1);
    const result = await productServices.updateProductId(1, updateProduct);
    const mockObj = { status: 200, message: { id: 1, ...updateProduct } };
    expect(mockObj).to.deep.equal(result);      
  });
  it("testando se ocorre um erro ao tentar atualizar um produto", async function () {   
    try {
      sinon.stub(productModel, "updateProductId").resolves(0);
      await productServices.updateProductId(999, updateProduct);      
    } catch (e) {
      const errMock = { status: 404, message: "Product not found" };
      expect(e).to.deep.equal(errMock);        
    }
  });
  it("Testando se a fun????o devolve um objeto de sucesso com status 204 em caso de sucesso", async function () {   
    
      sinon.stub(productModel, "deleteProductId").resolves(1);
     const result = await productServices.deleteProductId(1);     
  
      expect(result.status).to.equal(204);        
    
  });
  it("Testando se a fun????o devolve um objeto de erro em caso de error", async function () {   
    try {
       sinon.stub(productModel, "deleteProductId").resolves(0);
       await productServices.deleteProductId(999);  
    } catch (e) {
       const errMock = { status: 404, message: "Product not found" };
       expect(e).to.deep.equal(errMock);  
    }              
    
  });
  it("Testando se a fun????o devolve um objeto com status 200 e o item procurado", async function () {   
    sinon.stub(productModel, "getSearch").resolves(mockSearch);
    const result = await productServices.getProductSearch("Martelo"); 
    expect({ status: 200, message: mockSearch }).to.deep.equal(result);     
  });
  it("Testando se a fun????o devolve um objeto com status 200 e todos os produtos caso a query nao seja passada", async function () {   
    sinon.stub(productModel, "getSearch").resolves(mockAllSearch);
    const result = await productServices.getProductSearch("");        
    expect({ status: 200, message: mockAllSearch }).to.deep.equal(result);     
  });
  it("Testando se a fun????o devolve um objeto com status 200 e caso nenhum nome exista no banco de dados", async function () {   
    sinon.stub(productModel, "getSearch").resolves([]);
    const result = await productServices.getProductSearch("asdasdasdasd");        
    expect({ status: 200, message: [] }).to.deep.equal(result);     
  });


});