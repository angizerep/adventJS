// export default function getCoins(change) {
function getCoins(change) {

    console.log( 'INCIA INCIA INCIA INCIA INCIA INCIA INCIA INCIA ' );


    const coins = [1, 2, 5, 10, 20, 50]
    // console.log('coins ', coins)
    // console.log('coins ', coins.length)
    let changeAux
    let changeArray = []
    let change1 = 0 
    let change2 = 0 
    let change5 = 0 
    let change10 = 0 
    let change20 = 0 
    let change50 = 0 
    let res = 0
    let cambio = Number(change)



    for (let i = coins.length - 1 ; i > 0 ; i--  ){
        console.log( 'cambio ', cambio );
        console.log( 'coins[i] ', coins[i] )
        divisor = Number(coins[i])

        res = cambio/divisor
        console.log (' res res res res', res)            
        console.log ('  Math.floor(res) ',  Math.floor(res))


        // if ( Math.floor(res) >= 1 ){
        //     console.log( ' +++++++++++++++ Entra al if' )
        // }

        if ( res = 1 ){
            console.log( ' +++++++++++++++ Entra al if' )
        }
    }

    // ¡No olvides compartir tu solución en redes!
    return {}
}

const change = getCoins(10) // [0, 0, 0, 1, 0, 0]

console.log(' change ', change)
// getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos

