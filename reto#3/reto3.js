// export default function listGifts(letter) {
function listGifts(letter) {

  let words = letter.trim().split(/\s+/)
  let wordList = {}

  for (let i = 0; i < words.length; i++) {
0
    if ( !words[i].includes("[") || !words[i].includes("{") && 
          ( words[i].charAt(0).includes("(") && words[i].charAt(words[i].length-1).includes(")") && words[i].length > 2 ) ){
            console.log('TRUE')
      let currentWordCount = wordList[words[i]]
      let count = currentWordCount ? currentWordCount : 0
      wordList[words[i]] = count + 1
    }
  }
  return wordList;  
}

// const carta = 'bici coche (balón) bici coche peluche'
// const carta = '(muñeca) consola bici'
// const carta = 'bici coche (balón bici coche'
const carta = 'peluche (bici [coche) bici coche balón'
// const carta = '() bici'

const regalos = listGifts(carta)

console.log(regalos)

/**

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅
"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌

*/
