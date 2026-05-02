import { parseArgumentsToArray } from './utils.ts'

interface ExerciseResults {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}


const calculateExercises = (data : Array<number>, target : number): ExerciseResults => {
    const averageLength = data.reduce((e1,e2) => e1+e2) / data.length
    const rating = averageLength / target >= 0.99 ? 3 : (averageLength / target >= 0.7 ? 2 : 1)
    // if average is at least 
    // - 50% of target then rating 1
    // - 70% of target then rating 2
    // - 99% of target then rating 3
    const res: ExerciseResults = {
        periodLength: data.length,
        trainingDays: data.filter(e => e > 0).length,
        success: data.filter(e => e >= target).length == data.length ? true : false,
        rating : rating,
        ratingDescription: rating == 1 ? 'better luck next week' : (rating == 2 ? 'not too bad but could be better' : 'good work!'),
        target: target,
        average: averageLength
    }
    return res
}

try {
    const target : number = Number(process.argv[2])
    const data : Array<number> = parseArgumentsToArray(process.argv.slice(3))
    console.log(calculateExercises(data, target))
} catch (error : unknown) {
    if (error instanceof Error) {
        console.log(error.message)
    }
}
