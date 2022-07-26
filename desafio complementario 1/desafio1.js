



alert("Tengo tres primas la mayor se llama Ángela, la del medio Angelina y la menor Angélica. La suma de sus edades me da 30 años además, por ser primas,la edad de cada una de ellas es un número primo.Sabiendo que ninguna de ellas tiene mas de 21 años ¿cual es la edad de cada una de mis primas?")


const angela = 17
const angelina = 11
const angelica = 2

for (let i = 1; i <= 3; i++){
    let angelaIngresado = parseInt(prompt("¿Qué edad tiene Ángela?, la mayor"));
    let angelinaIngresado = parseInt(prompt("¿Qué edad tiene Angelina, la del medio?"));
    let angelicaIngresado = parseInt(prompt("¿Qué edad tiene Angélica, la menor?"));

    if ((angelaIngresado == angela) && (angelinaIngresado == angelina) && (angelicaIngresado == angelica)) {
        alert("Tremendo, le pegaste");
        
    }
    else if (((angelaIngresado == angela) && (angelinaIngresado == angelina)) ||
        ((angelaIngresado == angela) && (angelicaIngresado == angelica)) ||
        ((angelinaIngresado == angelina) && (angelicaIngresado == angelica))) {
        alert("Tas muy cerca le diste a 2");
    }
    else if ((angelaIngresado == angela) || (angelinaIngresado == angelina) || (angelicaIngresado == angelica)) {
        alert("Estas cerca, acertaste a uno, pero no te puedo decir cual");
    }
    else if (i <=2){
        alert("Lee y pensá de vuelta, podés intentarlo de nuevo");
    }
    else if (i =3){
        alert("Perdiste D:");
    }
    alert("Gastaste "+i+" de 3 intentos")
    
}