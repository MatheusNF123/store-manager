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
]
const sCall = [
  {
    productId: 2,
    quantity: 5,
  },
]

module.exports = {
  mockSaleProduct,
  mockResolvedSale,
  fCall,
  sCall,
};