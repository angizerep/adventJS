// export default function fixFiles(files) {
function fixFiles(files) {

    console.log(' ACA ADENTRO ',files)

    let arrayFiltered = removeDuplicates(files)
    const original = files

    console.log('arrayFiltered ', arrayFiltered)

    for ( let i = 0 ; i < arrayFiltered.length ; i ++ ){

        let k = 0

        console.log('iiiiiii  ', arrayFiltered[i])

        for ( let m = 0 ; m < original.length ; m ++  ){

            if ( arrayFiltered[i] === original[m] && k === 0 ){
                k++
                console.log('ES EL PRIMER ELEMENTO')
            } else if( arrayFiltered[i] === original[m] && k > 0 ){
                k++
                console.log('TIENE MAS DE 1 ELEMENTO y K es ', k)
                files[m] = original[m] + '('+k+')'
            }else{
                console.log('PS NO HACE NADA')
            }
        }
    }

    // ¡No olvides compartir tu solución en redes!
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
const files = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']


console.log( files )


/*
let myArray = [
    {id: 0, name: "Jhon"},
    {id: 1, name: "Sara"},
    {id: 2, name: "Domnic"},
    {id: 3, name: "Bravo"}
],

    //Find index of specific object using findIndex method.    
    objIndex = myArray.findIndex((obj => obj.id == 1));

    //Log object to Console.
    console.log("Before update: ", myArray[objIndex])

    //Update object's name property.
    myArray[objIndex].name = "Laila"

    //Log object to console again.
    console.log("After update: ", myArray[objIndex])

*/