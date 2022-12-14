const snakeize = require('snakeize');
const connection = require('./connection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};
const findProductId = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const registrationProduct = async (produto) => {
  const columns = Object.keys(snakeize(produto))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(produto)
    .map((_key) => '?')
    .join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(produto)],
  );

  return insertId;
};
const updateProductId = async (id, produto) => {
  const [{ affectedRows }] = await connection.execute(
    `
  UPDATE StoreManager.products
  SET name = ?
  WHERE id = ?`,
    [produto.name, id],
  );

  return affectedRows;
};

const deleteProductId = async (id) => {
 const [{ affectedRows }] = await connection.execute(
   `
  DELETE FROM StoreManager.products
  WHERE id = ?`,
   [id],
 );

  return affectedRows;
};

const getSearch = async (nome) => {
  const [result] = await connection.execute(
    `
    SELECT * FROM StoreManager.products Where name LIKE ?
    `,
    [`%${nome}%`],
  );
  
  return result;
};

module.exports = {
  getProducts,
  findProductId,
  registrationProduct,
  updateProductId,
  deleteProductId,
  getSearch,
};