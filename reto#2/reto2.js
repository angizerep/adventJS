// export default function listGifts(letter) {
function listGifts(letter) {

  let words = letter.trim().split(/\s+/)
  let wordList = {}

  for (let i = 0; i < words.length; i++) {

    if ( !words[i].includes("_") ){
      let currentWordCount = wordList[words[i]]
      let count = currentWordCount ? currentWordCount : 0
      wordList[words[i]] = count + 1
    }
  }
  return wordList;  
}

const carta = 'bici coche balón _playstation bici  coche  peluche'

const regalos = listGifts(carta)

console.log(regalos)
