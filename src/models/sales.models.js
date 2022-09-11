const connection = require('./connection');

const registrationSaleProduct = async (id, produto) => {
  produto.forEach(async (el) => {
  await connection.execute(`INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
   VALUE (?, ?, ?)`, [id, el.productId, el.quantity]);
  });
};

const registrationSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};
const getAllSalesProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * StoreManager.sales_products',
  );
  return result;
};

module.exports = {
  registrationSaleProduct,
  registrationSale,
  getAllSalesProducts,
};