// export default function fixFiles(files) {
function fixFiles(files) {

    console.log(' ACA ADENTRO ',files)

    let k = 0
    let resp
    let arrayFiltered = removeDuplicates(files)

    console.log('arrayFiltered ', arrayFiltered)

    for ( let i = 0 ; i < arrayFiltered.length ; i ++ ){

        console.log('iiiiiii  ', arrayFiltered[i])

        for ( let m = 0 ; m < files.length ; m ++  ){

        }
    }

    // ¡No olvides compartir tu solución en redes!
    return []
}

function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}


// const files = ['photo', 'postcard', 'photo', 'photo', 'video']
// fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files = ['file', 'file', 'file', 'game', 'game']
fixFiles(files) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']


// // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
// const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
// fixFiles(files) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']


console.log( files )
