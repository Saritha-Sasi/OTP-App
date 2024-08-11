const mongoose = require('mongoose');

const uri = 'mongodb+srv://sarithasasidharan0:5McpFhUIKSDMIEw9@cluster0.jgzclu4.mongodb.net/otp_DB?retryWrites=true&w=majority&appName=Cluster';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
