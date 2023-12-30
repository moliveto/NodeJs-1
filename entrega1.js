// Definir la función suma
async function suma(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
        // comprobar que los parametros sean numeros
        if (typeof a !== "number" || typeof b !== "number") {
            reject("alguno de los parametros no son numeros");
        }
        // Comprobar si alguno de los sumandos es 0
        if (a === 0 || b === 0) {
            // Rechazar la promesa con un mensaje de error
            reject("Operación innecesaria (suma)");
        } else {
            // Resolver la promesa con el resultado de la suma
            resolve(a + b);
        }
    });
}

// Definir la función resta
async function resta(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
        // comprobar que los parametros sean numeros
        if (typeof a !== "number" || typeof b !== "number") {
            reject("alguno de los parametros no son numeros");
        }
        // Comprobar si el minuendo o el sustraendo es 0
        if (a === 0 || b === 0) {
            // Rechazar la promesa con un mensaje de error
            reject("Operación inválida (resta)");
        } else {
            // Calcular el valor de la resta
            let resultado = a - b;
            // Comprobar si el resultado es menor que 0
            if (resultado < 0) {
                // Rechazar la promesa con un mensaje de error
                reject("La calculadora sólo puede devolver valores positivos (resta)");
            } else {
                // Resolver la promesa con el resultado de la resta
                resolve(resultado);
            }
        }
    });
}

// Definir la función multiplicación
async function multiplicacion(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
        // comprobar que los parametros sean numeros
        if (typeof a !== "number" || typeof b !== "number") {
            reject("alguno de los parametros no son numeros");
        }
        // Comprobar si alguno de los factores es negativo
        if (a < 0 || b < 0) {
            // Rechazar la promesa con un mensaje de error
            reject("La calculadora sólo puede devolver valores positivos");
        } else {
            // Resolver la promesa con el resultado de la multiplicación
            resolve(a * b);
        }
    });
}

// Definir la función división
async function division(a, b) {
    // Devolver una promesa
    return new Promise((resolve, reject) => {
        // comprobar que los parametros sean numeros
        if (typeof a !== "number" || typeof b !== "number") {
            reject("alguno de los parametros no son numeros");
        }
        // Comprobar si el divisor es 0
        if (b === 0) {
            // Rechazar la promesa con un mensaje de error
            reject("Operación inválida (division)");
        } else {
            // Resolver la promesa con el resultado de la división
            resolve(a / b);
        }
    });
}


const CalculosAsync = async () => {
    try {
        var result = 0;
        result = await suma(1, 2);
        console.log("suma: ", result);

        result = await resta(2, 1);
        console.log("resta: ", result);

        result = await multiplicacion(1, 1);
        console.log("multiplicacion: ", result);

        result = await division(2, 1);
        console.log("division: ", result);
    }
    catch (error) {
        console.log("error:", error);
    } finally {
        console.log("termine de ejecutar mi promesa con async-await");
    }
};

CalculosAsync();
//console.log("Fin de ejecucion");