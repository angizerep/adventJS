function sumPairs(numbers, result) {
    // export default function sumPairs(numbers, result) {

    let resp = []

    for ( let i = 0 ; i < numbers.length ; i++ ){
        for ( let j = 0 ; j < numbers.length ; j++ ){
            if ( numbers[i] + numbers[j] === result && resp.length == 0 && i != j ){
                resp.push(numbers[i], numbers[j])
                break;
            }
        }
    }
    if ( resp.length == 0 )
    {
        return null
    }else {
        return resp
    }
}

const pairs = sumPairs([3, 5, 7, 2], 10) // [3, 7]
// const pairs = sumPairs([-3, -2, 7, -5], 10) // null
// const pairs = sumPairs([2, 2, 3, 1], 4) // [2, 2]
// const pairs = sumPairs([6, 7, 1, 2], 8) // [6, 2]
// const pairs = sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]

console.log(' pairs ', pairs)
