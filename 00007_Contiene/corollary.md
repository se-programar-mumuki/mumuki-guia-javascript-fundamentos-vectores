¡Bien hecho!

Si venís prestando atención a los ejemplos de consulta, habrás notado que las listas también pueden tener elementos duplicados: `[1, 2, 1]`, `["hola", "hola"]`, etc.

Por tanto, `posicion` en realidad devuelve la posición de la _primera aparición_ del elemento en la lista. Por ejemplo:

```javascript
ム posicion(["qué", "es", "eso", "eso", "es", "queso"], "es")
1 //devuelve 1 porque si bien "es" también está en la posición 4, aparece primero en la posición 1.
```