//export default function contarOvejas(ovejas) {
function contarOvejas(ovejas) {

  const OvejasList = []

  for ( let i = 0 ; i< ovejas.length ; i++ ){
    const name = ovejas[i].name.toUpperCase()
    const color = ovejas[i].color.toUpperCase()
    if ( ( name.includes("A") || name.includes("N") ) && color === 'ROJO' ){
      OvejasList.push(ovejas[i])
    }
  }

  return OvejasList
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'ROJO'},
  { name: 'Amanda', color: 'rojo'},
  { name: 'LOLA', color: 'Rojo'}

]

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)
