// export default function checkSledJump(heights) {
function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!

    let sube = true
    let baja = true
    let max = Math.max.apply(null,heights)

    console.log('max ', max)


    for ( let i = 0 ; i < heights.length ; i++ ){
        console.log('PRIMER IF ')

        console.log('heights[i] ',heights[i])

        if ( heights[i] === ( heights[i + 1] - 1 ) ){
            console.log('sube ')
            sube = true
            if ( heights[i] === max ){
                console.log('ACA EN EL MAX')
                if ( heights[i] === ( heights[i + 1] + 1 ) ){
                    console.log('Baja ')
                }
            }
        }
    }

    console.log('aca ', heights)
    return false
}

const sledJump = checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta

console.log(sledJump)
