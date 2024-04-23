import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());




app.get('/', async (req, res) => {
    res.send("Coffee Server is Running!")
})

app.listen(port, () => {
    console.log(`Coffee Server is Running on Port: ${port}`);
})