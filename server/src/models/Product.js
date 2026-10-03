import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { 
        type: String, 
        enum: ['Chemicals', 'Biotech', 'Industrial','Consumer'], // Matches seed data
        required: true 
    },
    description: String,
    icon: String,
    externalLink: String,
    sortOrder: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);