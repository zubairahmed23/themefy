import express from 'express';

const app = express();
const port = 9000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use('/', (req, res) => {
    res.send("Hello how are you??");
});