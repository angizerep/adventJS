// export default function const reno = missingReindeer(ids) {
function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!

    var sortId = ids.sort(function (a, b) {  return a - b;  });

    var falta 

    if ( sortId[0] != 0 ){
        falta = 0
    }else {
        for ( let i = 0 ; i < sortId.length ; i++ ){
            let y = sortId[i] + 1
            if ( (sortId[i] === ( sortId[y] - 1) ) && i <= sortId.length ){
                console.log('VAMOS BIEN')
            }
            else if ( !( sortId[i] === ( sortId[y] - 1) ) && i <= sortId.length ) {
                falta = y
                break
            } 
        }
    }
    return falta
}

// const reno = missingReindeer([0, 2, 3]) // -> 1
// const reno = missingReindeer([1]) // -> 0
// const reno = missingReindeer([5, 6, 1, 2, 3, 7, 0,10,9,8,11,12,13,14,15,16,17,18]) // -> 4
// const reno = missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
// const reno = missingReindeer([3, 0, 1]) // -> 2
// const reno = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
// const reno = missingReindeer([0]) // -> 1 (¡es el último el que falta!)
// const reno = missingReindeer([5, 6, 1, 2, 3, 7, 0]) // sería 4

console.log( reno )

//ANOTHER
// export default function missingReindeer(ids) {
//     const missedReindeer = Object.keys(ids).find(e => !ids.includes(+e)) || ids.length;
//     return +missedReindeer;
// }