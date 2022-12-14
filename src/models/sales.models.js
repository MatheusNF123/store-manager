const camelize = require('camelize');
const connection = require('./connection');

const registrationSaleProduct = async (id, el) => {
  const [{ affectedRows }] = await connection.execute(`
 INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
   VALUE (?, ?, ?)`, [id, el.productId, el.quantity]);
  return affectedRows;
};

const registrationSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ()',
  );
  return insertId;
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id, date, product_id, quantity
FROM StoreManager.sales 
JOIN StoreManager.sales_products
ON id = sale_id
ORDER BY sale_id or product_id`,
  );
  return camelize(result);
};

const findSaleId = async (id) => {
    const [result] = await connection.execute(
      `SELECT date,  product_id,  quantity
      FROM StoreManager.sales 
      JOIN StoreManager.sales_products
      ON id = sale_id
      WHERE sale_id = ?`,
      [id],
    );
    return camelize(result);
};

const deleteSaleId = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    `
  DELETE FROM StoreManager.sales
  WHERE id = ?`,
    [id],
  );

  return affectedRows;
};

const updateSaleId = async (id, el) => {
  const [{ affectedRows }] = await connection.execute(
  `UPDATE StoreManager.sales_products
  SET quantity = ?
  WHERE product_id = ? and sale_id = ? `,
  [el.quantity, el.productId, id],
    
  );
  
   return affectedRows;
};

module.exports = {
  registrationSaleProduct,
  registrationSale,
  getAllSales,
  findSaleId,
  deleteSaleId,
  updateSaleId,
};