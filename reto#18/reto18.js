// export default function fixFiles(files) {
function fixFiles(files) {

    let arrayFiltered = removeDuplicates(files)
    const original = files

    for ( let i = 0 ; i < arrayFiltered.length ; i ++ ){

        let k = 0
        for ( let m = 0 ; m < original.length ; m ++  ){

            if ( original[m].includes('(')  ){
                if ( arrayFiltered[i] === original[m] && k === 0 ){
                    k++
                } else if( arrayFiltered[i] === original[m] && k > 0 ){
                    files[m] = original[m] + '('+k+')'
                    k++
                }
            }
            else {
                if ( arrayFiltered[i] === original[m] && k === 0 ){
                    k++
                } else if( arrayFiltered[i] === original[m] && k > 0 ){
                    files[m] = original[m] + '('+k+')'
                    k++

                }
            }
        }
    }
    return files
}

function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}


// const files = ['photo', 'postcard', 'photo', 'photo', 'video']
// fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

// const files = ['file', 'file', 'file', 'game', 'game']
// fixFiles(files) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']


// // ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
// const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
// fixFiles(files) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']


console.log( files )
