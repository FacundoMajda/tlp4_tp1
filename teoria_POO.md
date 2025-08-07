# Análisis final

---

**1. ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con `prototype` y usar `class`?**

- Las funciones constructoras con `prototype` son el método tradicional, pero la sintaxis es menos clara y no permiten propiedades privadas reales.
- Las clases tienen una sintaxis más moderna y permiten declarar privados con `#`, lo que mejora la organización y seguridad del código.

---

**2. ¿Cuáles son las ventajas de usar `getters` y `setters`?**

Los getters y setters pueden ser usados como envoltorios sobre valores de propiedad "reales" para obtener más control sobre ellos:

- Permiten controlar cómo se accede y modifica una propiedad.
- Se pueden validar valores antes de asignarlos.
- Mejoran la encapsulación y el mantenimiento del código.

---

**3. ¿Qué problemas pueden surgir al modificar prototipos nativos como `String`?**

- Modificar prototipos nativos puede causar conflictos si otras partes del código o librerías usan el mismo nombre de método.
- Puede generar errores y comportamientos inesperados.
- No es recomendable porque afecta a todos los objetos de ese tipo en el proyecto.

---

**4. Teniendo en cuenta un objeto `personPrototype` que contiene un método `greet`, ¿qué diferencias encontrás entre asignar ese método directamente al `prototype` de una función constructora o usar `Object.assign`?**

- Asignar el método directamente al `prototype` agrega solo ese método, mientras que `Object.assign` permite copiar varios métodos de un objeto a la vez.
- `Object.assign` es útil para mezclar varios métodos o propiedades de diferentes objetos prototype.
- Si se usa `Object.assign`, se pueden sobrescribir métodos existentes sin querer, por eso hay que tener cuidado.

```js
Object.assign(target, source);
```

Las propiedades del objeto destino son sobrescritas por las propiedades de las fuentes si tienen la misma clave. Las propiedades de las fuentes posteriores sobrescriben a las anteriores.
