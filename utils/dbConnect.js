const mongoose = require('mongoose');

const dbConnect = async () => {
    const MONGODB_URI = process.env.MONGODB_URI ;

    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = dbConnect;
