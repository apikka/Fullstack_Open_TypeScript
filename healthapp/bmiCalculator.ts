import { validateNumber } from "./utils.ts"

const calculateBmi = (height : number, weight : number): string => {
    const bmi = weight / (height * 1/100) ** 2
    
    if (bmi < 18.5) {
        return 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 25) {
        return 'Normal range'
    }
    return 'Overweight'
}


try {
    const h: number = validateNumber(Number(process.argv[2]))
    const w: number = validateNumber(Number(process.argv[3]))
    console.log(calculateBmi(h, w))
} catch (error : unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
}


