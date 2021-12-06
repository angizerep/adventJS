// export default function listGifts(letter) {
function isValid(letter) {

  let words = letter.trim().split(/\s+/)
  let resp = false;

  for (let i = 0; i < words.length; i++) {
    if ( words[i].includes("[") || words[i].includes("{") ) {
        resp = false
        break
    } else if ( ( words[i].charAt(0).includes("(") && 
      !words[i].charAt(words[i].length-1).includes(")") ) && words[i].length > 2 )  {
        resp = false
        break
    } else if ( words[i].includes("()") ){
      resp = false
      break
    }else if ( words[i].charAt(0).includes("(") && 
      words[i].charAt(words[i].length-1).includes(")") && words[i].length > 2 ){
        resp = true
    } else if ( words[i].charAt(0).includes("(") &&  
      words[i].charAt(words[i].length-1).includes(")") && words[i].length < 3 ){
        resp = false
        break
    }else {
        resp = true
    }
  }
  return resp
}

// const carta = 'bici coche (balón) bici coche peluche'
// const carta = '(muñeca) consola bici'
// const carta = 'bici coche (balón bici coche'
// const carta = 'peluche (bici [coche) bici coche balón'
// const carta = '() bici'
// const carta = "bici (balón bici coche"
const carta = '(()) bici'
// const carta = '"(a() bici (a)"'

const regalos = isValid(carta)

console.log(regalos)

/**
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅
"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/
