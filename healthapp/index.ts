import express from 'express';
import { calculateBmi } from './bmiCalculator.ts';
import { validateQuery } from './utils.ts'

const app = express()

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!')
});


app.get('/bmi', (req, res) => {
    const height = Number(req.query.height);
    const weight = Number(req.query.weight);
    const resObject = validateQuery(
        {'height' : height, 'weight' : weight}, 
        {
            'weight' : weight,
            'height' : height,
            'bmi' : calculateBmi(height, weight)
        }
    )
    res.send(resObject)

})



const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
});