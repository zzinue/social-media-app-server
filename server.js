import express from 'express';
import cors from 'cors';
import 'dotenv/config.js'
import connectDB from "./configs/db.js";

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running!');
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

