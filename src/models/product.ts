import sqlite3 from 'sqlite3';

let db: sqlite3.Database;

async function initializeDatabase() {
  return new Promise<void>((resolve, reject) => {
    db = new sqlite3.Database('./database.db', (err) => {
      if (err) {
        reject(err);
      } else {
        db.run('CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY, name TEXT, price REAL, category TEXT)', [], (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    });
  });
}

initializeDatabase();

const Product = {
  create: async (name: string, price: number, category: string) => {
    return new Promise<void>((resolve, reject) => {
      db.run('INSERT INTO products (name, price, category) VALUES (?, ?, ?)', [name, price, category], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },

  getAll: async () => {
    return new Promise<sqlite3.RunResult[]>((resolve, reject) => {
        db.all('SELECT * FROM products', [], (err, rows: sqlite3.RunResult[]) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
  },

  update: async (id: number, name: string, price: number, category: string) => {
    return new Promise<void>((resolve, reject) => {
      db.run('UPDATE products SET name = ?, price = ?, category = ? WHERE id = ?', [name, price, category, id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },

  delete: async (id: number) => {
    return new Promise<void>((resolve, reject) => {
      db.run('DELETE FROM products WHERE id = ?', [id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
};

export default Product;
