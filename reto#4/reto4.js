function createXmasTree(height) {
  // export default function createXmasTree(height) {

  const heightAux = height

  let arbolAux = ''
  for( let i = 1; i <= height; i++){

    const str = '_'.repeat( height - i );
    const str2 = '*'. repeat( i * 2 - 1)

    arbolAux = arbolAux.concat( str, str2, str,'\n' )

    if ( i === height ){
      let str3 = '_'.repeat( heightAux - 1 );
      let str4 = '#'

      arbolAux = arbolAux.concat( str3, str4, str3,'\n' )
      arbolAux = arbolAux.concat( str3, str4, str3 )
    }

  }
  return arbolAux

}

const arbol = createXmasTree (2);

console.log(arbol)