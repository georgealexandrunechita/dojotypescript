TypeScript Dojo – Resumen rápido
En este dojo hemos repasado varios pilares de TypeScript aplicados a un mini-mundo de juego:

Tipos básicos y variables
Hemos usado string, number y boolean para modelar jugadores (nombre, nivel, activo), y visto cómo declarar variables con let y constantes con const.

Tipo any
Vimos any como “modo JS puro”, que permite cambiar de tipo (por ejemplo, de "Espada" a 10), entendiendo que es flexible pero menos seguro.

Operaciones y funciones simples
Practicamos operaciones numéricas (ataque - defensa) y funciones que reciben parámetros tipados y devuelven un valor (curar(puntosVida, curacion): number).

Arrays y tuplas
Trabajamos con arrays tipados (string[], number[]) y métodos como forEach, además de tuplas ([string, number]) para representar datos fijos como [arma, daño].

Interfaces
Definimos interfaces como Personaje para describir la “forma” de un objeto (nombre, nivel, salud) y las usamos tanto para crear objetos como para definir parámetros de funciones.

Enums
Creamos un enum (ClasePersonaje) para representar clases de personaje con nombres claros en lugar de usar números mágicos.

Clases, herencia y polimorfismo
Construimos clases como PersonajeJuego y Jugador, y subclases (Guerrero, Mago) con propiedades extra (fuerza, mana), sobrescribiendo mostrarInfo() y almacenando distintos tipos en un mismo array.

Genéricos
Implementamos una función genérica (getPrimero<T>) capaz de trabajar con arrays de distintos tipos (armas, pociones) manteniendo la seguridad de tipos.
