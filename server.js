import express from 'express';
import cors from 'cors';
import 'dotenv/config.js'
import connectDB from "./configs/db.js";
import {inngest, functions} from "./inngest/index.js";
import {serve} from 'inngest/express'

const app = express();

await connectDB();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server running!');
})

app.use('api/inggest',serve({client:inngest,functions}))

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

