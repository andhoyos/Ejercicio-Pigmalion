function pigma_1(arr, num) {
  for (j = 1; j < Math.pow(2, arr.length); j++) {
    // El número de combinaciones es 2^n
    let newArray = []; // La combinación de números
    for (i = 0; i < arr.length; i++)
      // Evaluamos cada elemento contra el array
      if (Math.pow(2, i) & j) newArray.push(arr[i]);
    let sum = 0; // La suma de la combinación

    // console.log("array " + j, newArray);
    for (i = 0; i < 2; i++) {
      sum += newArray[i];

      if (sum === num) {
        console.log(`la combinacion ${newArray} es igual a ${num}`);

        return true;
      }
    }
  }
  return false;
}
console.log("\nInicio resultado primer punto");
console.log(pigma_1([4, 5, 1, 0, 4], 8));

/**
 * Devuelve la suma de los los elementos en orden al indice del array
 * elemento 0 + elemento 1 ......hasta elemento 0 + ultimo elemento
 * y continua con elemento 1 + elemento 2 ......hasta elemento 1 + ultimo elemento
 *
 * @param array
 * @param n
 * @returns true/false
 */

function pigma_2(array, n) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      let suma = array[i] + array[j];
      // console.log(suma);

      if (array[i] + array[j] === n) {
        console.log(`la combinacion ${array[i]},${array[j]} es igual a ${n}`);

        return true;
      }
    }
  }
  return false;
}
console.log("\nInicio resultado segundo punto");
console.log(pigma_2([4, 5, 3, 1, 0], 8));
