import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import router from './router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));