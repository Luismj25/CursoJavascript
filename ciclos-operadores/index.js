/* operadores de comparacione

==
=== evita error al comparar valores y tipos de datos
!= diferente de 
!== diferente en valor y tipo de dato
> mayor que 
< menor que

*/

const a = 10
const b = 20
const c = "10"

a == b

// estructura de control

let nombre = "Nico"
if (nombre === "Luis"){
    console.log("Hola "+nombre)
} else if  (nombre === "Nico"){
    console.log("Hola Nico")
}     else {
    console.log ("Nombre no enocntrado")
}