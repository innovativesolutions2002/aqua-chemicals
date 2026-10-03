import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/products.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', company: 'Aqua Chemicals & Enzymes' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Aqua Chemicals API running on port ${PORT}`));
