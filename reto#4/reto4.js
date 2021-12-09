function createXmasTree(height) {
  // export default function createXmasTree(height) {

  const heightAux = height

  for( let i = 1; i <= height; i++){

    let str = '_'.repeat( height - i );
    let str2 = '*'. repeat( i * 2 - 1)

    console.log(str + str2 + str);

    if ( i === height ){
      let str3 = '_'.repeat( heightAux - 1 );
      let str4 = '#'

      console.log(str3 + str4 + str3 );
      console.log(str3 + str4 + str3 );
    }

  }
  return ''
}

const arbol = createXmasTree (2);

console.log(arbol)