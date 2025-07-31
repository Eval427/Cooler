import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

let imgUrl: string;

// Discord -> Server
app.post('/inbound', async (req, res) => {
    imgUrl = req.body.img;
    const userSubmit = req.body.sender;
    res.json({"result": "Image Acquired"});
});

// Server -> Client
app.get('/displayImage', async (req, res) => {
    res.json({img: imgUrl});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});