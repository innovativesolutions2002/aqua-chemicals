import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// GET all active products
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        const filter = category ? { category, isActive: true } : { isActive: true };
        const products = await Product.find(filter).sort({ createdAt: -1 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single product by slug
router.get('/:slug', async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug, isActive: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
