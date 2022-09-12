const mockSaleProduct = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const mockResolvedSale = {
  id: 3,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};
const fCall = [
  {
    productId: 1,
    quantity: 1,
  },
];
const fCallError = [
  {
    productId: 9999,
    quantity: 1,
  },
];
const sCall = [
  {
    productId: 2,
    quantity: 5,
  },
];

const mockAllSales = [
  {
    saleId: 1,
    date: "2022-09-11T13:36:16.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-09-11T13:36:16.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2022-09-11T13:36:16.000Z",
    productId: 3,
    quantity: 15,
  },
];

const mockSaleID = [
  {
    date: "2022-09-11T13:36:16.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2022-09-11T13:36:16.000Z",
    productId: 2,
    quantity: 10,
  },
];



const MockUpdataSalesById = [
  {
    productId: 1,
    quantity: 10,
  },
  {
    productId: 2,
    quantity: 50,
  },
];



module.exports = {
  mockSaleProduct,
  mockResolvedSale,
  fCall,
  sCall,
  fCallError,
  mockAllSales,
  mockSaleID,
  MockUpdataSalesById,
};
