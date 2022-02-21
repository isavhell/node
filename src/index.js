var fragmento = `El agua de la laguna se removió, creando pequeñas olas de plata que se desplazaban desde el
centro hasta sus orillas, y la cabeza de Slaven se asomó por encima de la superficie. Lo observé nadar
hasta alcanzar las piedras de uno de los extremos y elevarse con agilidad sobre las mismas para salir
del agua, de espaldas a mí.`

var fragmentoSinAcentos = fragmento.replace(/[áà]/gmi, 'a')
.replace(/[éè]/gmi, 'e')
.replace(/[íì]/gmi, 'i')
.replace(/[óò]/gmi, 'o')
.replace(/[úù]/gmi, 'u')
.replace(/[ñ]/gmi, 'n')

var frase = `Aun si no podía ver su rostro, intuí que sonreía.`
var nuevafrase = frase.replace(/[aeiou]/gmi, 'e')


var fragmentoSinSaltosDeLinea = fragmentoSinAcentos.replace(/\n+/gmi,' ')

console.log(fragmentoSinSaltosDeLinea)