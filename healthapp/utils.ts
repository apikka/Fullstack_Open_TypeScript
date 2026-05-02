
export const validateNumber = (x : number): number => {
    if (!isNaN(x)) {
        return x
    } else {
        throw new Error('Provided value is not a number')
    }
}

export const parseArgumentsToArray = (args : string[]): Array<number> => {
    const lenArgs = args.length
    const res: Array<number> = []

    for (let i=0; i < lenArgs; i++) {
        res.push(validateNumber(Number(args[i])))
    }
    return res
}

export default 'utils'