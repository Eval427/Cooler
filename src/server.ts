import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let imgUrl: string;

// Discord -> Server
app.post('/inbound', async (req, res) => {
    imgUrl = req.body.img;
    const userSubmit = req.body.sender;
    console.log(`New inbound image ${imgUrl} from ${userSubmit}`);
    res.json({"result": "Image Acquired"});
});

// Server -> Client
app.post('/displayImage', async (req, res) => {
    res.json({img: imgUrl});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});