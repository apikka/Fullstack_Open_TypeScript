interface ExerciseData {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateExercises = (data : Array<number>, target : number): ExerciseData => {
    const averageLength = data.reduce((e1,e2) => e1+e2) / data.length
    const rating = averageLength / target >= 0.99 ? 3 : (averageLength / target >= 0.7 ? 2 : 1)
    // if average is at least 
    // - 50% of target then rating 1
    // - 70% of target then rating 2
    // - 99% of target then rating 3
    const res: ExerciseData = {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))