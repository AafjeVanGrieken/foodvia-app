import express from 'express';
import productController from '../controllers/productController';
import path from 'path';

const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/home.html'));
});

// Products route
router.use('/products', productController);

// Products HTML page
router.get('/productsPage', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/products.html'));
});

// Settings route
router.get('/settings', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/settings.html'));
});

export default router;
