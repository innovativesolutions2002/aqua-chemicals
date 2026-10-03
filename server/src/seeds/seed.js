import dotenv from 'dotenv';
// Load env from specific path to avoid Windows CWD issues
dotenv.config({ path: new URL('../.env', import.meta.url) });

import connectDB from '../config/db.js';
import Product from '../models/Product.js';

const products = [
    { 
        name: 'Water Treatment Chemicals', 
        slug: 'water-treatment-chemicals', 
        category: 'Chemicals',
        description: 'Advanced coagulants, flocculants, anti-scalants, and specialty chemicals for industrial water purification and RO systems.',
        icon: 'FlaskConical',
        sortOrder: 1 
    },
    { 
        name: 'Enzymes', 
        slug: 'enzymes', 
        category: 'Biotech',
        description: 'Specialty bio-enzymes and biocultures for textile, paper, sugar industries, and wastewater treatment (ETP/STP).',
        icon: 'Dna',
        sortOrder: 2 
    },
    { 
        name: 'Non Woven Geotextile', 
        slug: 'non-woven-geotextile', 
        category: 'Industrial',
        description: 'High-strength needle-punched geotextiles and fabrics for filtration, drainage, soil stabilization, and industrial applications.',
        icon: 'Layers',
        sortOrder: 3 
    },
    { 
        name: 'FMCG Products', 
        slug: 'fmcg-products', 
        category: 'Consumer',
        description: 'Premium home care solutions under our brand "WASCH". Featuring plant-based enzyme technology for washing machines and disinfectants.',
        icon: 'ShoppingBag', // New Icon
        externalLink: 'https://wascheasyhai.com/', // External Link
        sortOrder: 4 
    }
];

const seed = async () => {
    try {
        await connectDB();
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('🧪 Seeded products in PDF specified order');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seed Error:', error.message);
        process.exit(1);
    }
};

seed();