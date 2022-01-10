Si le pedís un elemento en una posición igual o mayor al tamaño de la lista, vas a obtener `undefined`. No parece algo terrible, pero el problema es que con `undefined` no podés hacer nada realmente útil.

Así que la advertencia es: ¡no te pases de índice! :warning:

> Teniendo esto en cuenta, va un desafío: definí nuevamente la función `medallaSegunPuesto`, pero esta vez usando como máximo un único `if`. Quizás las listas te pueden ser útiles acá :wink:.
>
> Te recordamos qué hace la función: tiene que devolver la medalla que le corresponde a los primeros puestos de una competencia.
>
>```javascript
>ム medallaSegunPuesto(1)
>"oro"
>ム medallaSegunPuesto(2)
>"plata"
>ム medallaSegunPuesto(3)
>"bronce"
>ム medallaSegunPuesto(4)
>"nada"
>ム medallaSegunPuesto(5)
>"nada"
```
