/*# Exercise 10

* Explain the difference between the double and the triple equals operator.
*/

//== igualdad no estricta, realiza las converisiones de tipo necesarias para poder comparar los valores si estos son diferentes.

//=== igualdad estricta, este operador no realiza conversiones, hace directamente una comparacion directa de valores y tipo. 
//Solo devolvera "true" cuando los dos valores y sus tipos sean iguales.
const firstYearCompleted = true;
const yearsCompleted = 1;

yearsCompleted == firstYearCompleted
yearsCompleted === firstYearCompleted