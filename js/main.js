// Encuentra grandes números primos palindrómicos en la expansión decimal de π (3,1415…)

var limite = 10000000; // cantidad máxima de n enteros positivos.
var suma = 0; // guarda la suma de los enteros positivos.
var pi = 0; // guarda el valor de final de Pi.
for (var i = 1; i <= limite; i++) {
  suma += 1 / i ** 2;
}
pi = Math.sqrt(suma * 6);
pi;

pi *= 10000000000000000;
pi;

pi.join('').pi.split('');
