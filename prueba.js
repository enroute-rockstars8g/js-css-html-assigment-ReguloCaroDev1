/* console.log("Hola mundo");

const myObject = {
  marca: "Ford",
  modelo: "Mustang",
  fechaCreacion: 2022,
  position: 0,
  velocidad: 0,

  move: () => {
    myObject.position += myObject.velocidad;
  },
  colores: ["rojo", "negro", "blanco"],
  partesMotor: {
    motor: {
      cilindros: 8,
    },
    puertas: 4,
  },
};
cilindrosTotal = myObject.partesMotor.motor.cilindros;
console.log(myObject);
console.log(myObject.position);
myObject.velocidad = 50;
myObject.move();
myObject.move();
console.log(myObject.position);
console.log("Cilindros: ", cilindrosTotal);

const myMap = new Map();
myMap.set("primeraKey", 1);
myMap.set("segundaKey", "jajaja");

console.log(myMap.get("segundaKey"));
console.log(myMap.has("hola"));

const sayHello = () => { */
/*  console.log("Hello from button"); */

/*  const agregar = document.createElement("textarea");
  agregar.innerHTML = "hola";
  document.body.appendChild(agregar);
};
 */
const fibo = () => {
  let loop = [0, 1];
  let number = document.getElementById("entrada").value;
  for (let i = 2; i < number; i++) {
    loop[i] = loop[i - 1] + loop[i - 2];
  }

  if (number < 50) {
    document.getElementById("salida").innerHTML =
      "El resultado es: " + loop[number - 1];
  } else {
    document.getElementById("salida").innerHTML =
      "intenta poner un numero que no tenga valor de infinito menor que 50";
  }
};

const factorizar = () => {
  let num = document.getElementById("entrada2").value;
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  if (num < 3628801) {
    document.getElementById("salida2").innerHTML = "El resultado es: " + num;
  } else {
    return (document.getElementById("salida2").innerHTML =
      "Numero muy largo, intenta un factorizar menor o igual que 10");
  }
};
