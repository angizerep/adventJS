// export default function checkSledJump(heights) {
function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!

    let sube = true
    let baja = true

    for ( let i = 0 ; i < heights.length ; i++ ){
        console.log('aca ')

        console.log('heights[i] ',heights[i])

        if ( heights[i] === ( heights[i + 1] - 1 ) ){
            console.log('sube ')
        }
    }

    console.log('aca ', heights)
    return false
}

const sledJump = checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta

console.log(sledJump)
