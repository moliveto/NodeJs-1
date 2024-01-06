# Comisión 50040

## Programación Backend

### Desafio ProductManager

Consigna

- Realizar una clase “ProductManager” que gestione un conjunto de productos.

- Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

- Cada producto que gestione debe contar con las propiedades:

```
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)
```

- Aspectos a incluir

Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
Validar que no se repita el campo “code” y que todos los campos sean obligatorios
Al agregarlo, debe crearse con un id autoincrementable

Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
En caso de no coincidir ningún id, mostrar en consola un error “Not found”

### Hand-ons Calculadora positiva con promesas

## Cómo lo hacemos?

- Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASÍNCRONO donde podremos ponerlas a prueba
- Definir función suma:
  - Debe devolver una promesa que se resuelva siempre que ninguno de los dos sumandos sea 0
  - En caso de que algún sumando sea 0, rechazar la promesa indicando “Operación innecesaria”.
- Definir función resta:
  - Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
  - En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando “Operación inválida
  - En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando “La calculadora sólo puede devolver valores positivos”
- Definir una función multiplicación:
  - Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
  - Si el producto es negativo, rechazar la oferta indicando “La calculadora sólo puede devolver valores positivos
- Definir la misma función división utilizada en esta clase.
- Definir una función asíncrona “cálculos”, y realizar pruebas utilizando async/await y try/catch

# Calculadora Positiva

Esta es una calculadora en JavaScript (Node.js) que realiza operaciones matemáticas, asegurándose de que los resultados sean siempre positivos. Utiliza promesas para manejar casos específicos y proporcionar mensajes de error descriptivos.

## Funciones Disponibles

### 1. Suma

```javascript
const resultadoSuma = await suma(a, b);

const resultadoResta = await resta(a, b);

const resultadoMultiplicacion = await multiplicacion(a, b);

const resultadoDivision = await division(a, b);
```

### Ejecutar

```javascript
node entrega1.js
```
