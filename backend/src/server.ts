import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import userRoutes from './routes/userRoutes';
import loanRoutes from './routes/loanRoutes';

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});