const calculateBmi = (height : number, weight : number): string => {
    const bmi = weight / (height * 1/100) ** 2
    
    if (bmi < 18.5) {
        return 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 25) {
        return 'Normal range'
    }
    return 'Overweight'
}

const h: number = Number(process.argv[2])
const w: number = Number(process.argv[2])

console.log(calculateBmi(h, w))
