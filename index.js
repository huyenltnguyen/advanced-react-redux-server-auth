import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3001;

// DB setup
mongoose.connect('mongodb://localhost/auth');

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));