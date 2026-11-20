import mongoose from 'mongoose';
import { Note } from '../models/note';

export const connectMongoDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    await mongoose.connect(url);
    console.log('✅ MongoDB connection established successfully');

    await Note.syncIndexes();
    console.log('✅ Indexes synced successfully');
  } catch (error) {
    console.error('Failed to connect', error.message);
    process.exit(1);
  }
};
