// export default function decodeNumber(symbols) {
function decodeNumber(symbols) {
    // ¡No olvides compartir tu solución en redes!

    var res = 0

    let arrayDecodes = decodes(symbols)

    if ( arrayDecodes.length > 0 ){
        for( let i = 0 ; i < arrayDecodes.length ; i++ ){
    
            if ( arrayDecodes[i] < arrayDecodes[i+1] ){
                console.log('SE RESTA')
                res = res - arrayDecodes[i]
            }else{
                console.log('SE SUMAAAAAA')
                res = res + arrayDecodes[i]
            }
        }
    }
    else {
        res = NaN
    }

    return res
}

function decodes(arr) {

    const punto = 1
    const coma = 5
    const dosPuntos = 10
    const puntoComa = 50
    const exclamacion = 100

    var arrayUpdate = []

    for ( let i = 0 ; i < arr.length ; i ++ ){

            if ( arr[i] === '.' ){
                arrayUpdate.push(punto)
            } 
            else if ( arr[i] === ',' ){
                arrayUpdate.push(coma)
            }
            else if ( arr[i] === ':' ){
                arrayUpdate.push(dosPuntos)
            }
            else if ( arr[i] === ';' ){
                arrayUpdate.push(puntoComa)
            }
            else if ( arr[i] === '!' ){
                arrayUpdate.push(exclamacion)
            }else {
                arrayUpdate = []
                break
            }
    }

    return arrayUpdate
}

// const decode = decodeNumber('...') // 3
// const decode = decodeNumber('.,') // 4 (5 - 1)
// const decode = decodeNumber(',.') // 6 (5 + 1)
// const decode = decodeNumber(',...') // 8 (5 + 3)
// const decode = decodeNumber('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
// const decode = decodeNumber('.;') // 49 (50 - 1)
// const decode = decodeNumber('..,') // 5 (-1 + 1 + 5)
// const decode = decodeNumber('..,!') // 95 (1 - 1 - 5 + 100)
// const decode = decodeNumber('.;!') // 49 (-1 -50 + 100)
// const decode = decodeNumber('!!!') // 300
// const decode = decodeNumber(';!') // 50
const decode = decodeNumber(';.W') // NaN

console.log(decode)