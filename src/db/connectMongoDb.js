import mongoose from 'mongoose';

export const connectMongoDb = async () => {
  try {
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('Failed to connect', error.message);
  }
};
