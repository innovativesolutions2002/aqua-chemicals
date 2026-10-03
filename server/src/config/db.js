import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log(
            'MONGO_URI:',
            process.env.MONGO_URI ? '✅ Loaded' : '❌ Undefined'
        );

        await mongoose.connect(process.env.MONGO_URI);

        console.log('✅ MongoDB Connected');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

export default connectDB;