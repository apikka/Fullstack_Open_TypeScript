import express from 'express';
const app = express()

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!')
});

/*
app.get('/bmi', (req, _res) => {
    const _height = req.query.height;
    const _weight = req.query.weight;

})
*/


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});