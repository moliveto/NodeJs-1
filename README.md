# Comisión 50040

## Programación Backend

### Calculadora positiva con promesas

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
