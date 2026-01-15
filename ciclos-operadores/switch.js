let expresion = "uvas";

switch (expresion) { //usa unicamente el === para validar
  case "Naranjas":
    console.log("Las naranjas cuestan  $20 el kilo");
    break;
  case "Manzanas":
    console.log("Las manzanas cuestan $40 el kilo");
    break;
  case "Platanos":
    console.log("Los platanos cuestan $30 el kilo");
    break;
  case "Mangos":
  case "papayas":
    console.log("Los mangos y las papayas cuestan $25 el kilo");
    break;
  default:
    console.log(`Lo siento, no contamos con ${expresion}`);
}

console.log("Hay algo mas que desees?");