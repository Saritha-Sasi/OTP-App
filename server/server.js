const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const otpRoutes = require('./routes/otpRoutes');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/otp', otpRoutes);

app.get('/', (req, resp)=>{
  resp.send("server is running");
})

app.listen(5000, () => console.log('Server running on port 5000'));
