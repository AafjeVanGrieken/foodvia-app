import express from 'express';
import Product from '../models/product';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.getAll();
    res.json(products);
});

router.post('/', async (req, res) => {
    console.log(req.body)
    const { name, price, category } = req.body;
    console.log(name, price, category)
    await Product.create(name, price, category);
    res.sendStatus(201);
});

router.put('/:id', async (req, res) => {
    const { name, price, category } = req.body;
    const { id } = req.params;
    await Product.update(Number(id), name, price, category);
    res.sendStatus(200);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Product.delete(Number(id));
    res.sendStatus(200);
});

export default router;
