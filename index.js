import express from 'express';

const app = express();
const port = 9000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use('/', (req, res) => {
    res.json({
        name:"themefy",
        version:"1.0.0",
        owner:"Sai Priyansh Panda",
        author:"Sheikh Zubair Ahmed",
        domain:"themefy.vercel.app"
    });
});