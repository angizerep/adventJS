// export default function pangram(letter) {
function pangram(letter) {

    var consonantes = 'qwertyuiopasdfghjklzxcvbnmñ'
    var aes = 'aàáâäãåā'
    var ees = 'eèéêëēėę'
    var ies = 'iîïíīįì'
    var oes = 'oôöòóøōõ'
    var ues = 'uûüùū'

    var flagAes = false;
    var flagEes = false;
    var flagIes = false;
    var flagOes = false;
    var flagUes = false;
    var flagConsonantes = false;
    var flagGlobal = false;

    var letterMayuscula = letter.toUpperCase()

    // Valida consonantes
    for( let i = 0 ; i < consonantes.length ; i++ ){

        const letra = consonantes[i].toUpperCase()

        if ( letterMayuscula.includes( letra ) ){
            flagConsonantes = true
        }else{
            flagConsonantes = false
            break
        }
    }

    for( let a = 0 ; a < aes.length ; a++ ){
        const letra = aes[a].toUpperCase()

        if (flagAes === false ){
            if ( letterMayuscula.includes( letra ) ){
                flagAes = true
            }else{
                flagAes = false
                break
            }
        }
    }

    for( let e = 0 ; e < ees.length ; e++ ){
        const letra = ees[e].toUpperCase()

        if ( flagEes === false ){
            if ( letterMayuscula.includes( letra ) ){
                flagEes = true
            }else{
                flagEes = false
                break
            }
        }
    }

    for( let i = 0 ; i < ies.length ; i++ ){
        const letra = ies[i].toUpperCase()

        if ( flagIes === false ){
            if ( letterMayuscula.includes( letra ) ){
                console.log('If IF')
                flagIes = true
            }else{
                console.log('Else')
                flagIes = false
                break
            }
        }

    }

    for( let o = 0 ; o < oes.length ; o++ ){
        const letra = oes[o].toUpperCase()

        if ( flagOes === false ){
            if ( letterMayuscula.includes( letra ) ){
                flagOes = true
            }else{
                flagOes = false
                break
            }
        }
    }

    for( let u = 0 ; u < ues.length ; u++ ){
        const letra = ues[u].toUpperCase()

        if ( flagUes === false ) {
            if ( letterMayuscula.includes( letra ) ){
                flagUes = true
            }else{
                flagUes = false
                break
            }
        }
    }

    if ( flagConsonantes === true && flagAes === true && flagEes === true &&
        flagIes === true && flagOes === true && flagUes === true ){
            flagGlobal = true
        }
        else{
            flagGlobal = false
        }

    return flagGlobal
}

const abcdary = pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
// const abcdary = pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true
// const abcdary = pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
// const abcdary = pangram('De la a a la z, nos faltan letras') // false

console.log(abcdary)
