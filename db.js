import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
const connectDb = async () => {
  const URL = process.env.MONGO_URI;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },() => {
      console.log('Connected to MongoDB');
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
