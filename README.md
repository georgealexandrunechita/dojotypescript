🎮 TypeScript Dojo – Lo que hemos aprendido
<div align="center">
Un viaje completo desde variables básicas hasta clases con herencia

</div>

📚 Conceptos clave dominados
Nivel	Concepto	Ejemplo práctico
🟢 Básico	Variables tipadas	nombre: string, nivel: number, activo: boolean
🟡 Intermedio	const / let / any	MAX_VIDAS = 3, inventario dinámico
🟢 Básico	Funciones tipadas	curar(vida: number, curacion: number): number
🟡 Intermedio	Arrays + forEach()	armas.forEach(arma => console.log(arma))
🟠 Avanzado	Tuplas	["Espada", 25] – arma + daño fijo
🟠 Avanzado	Interfaces	interface Personaje { nombre: string; nivel: number }
🟢 Básico	Enums	enum ClasePersonaje { Guerrero, Mago }
🔴 Expert	Clases + Herencia	Guerrero extends PersonajeJuego
🔴 Expert	Polimorfismo	Array mixto [Guerrero, Mago]
🔴 Expert	Genéricos	getPrimero<T>(array: T[]): T
🚀 Estructura del proyecto
text
typescript-dojo/
├── 01-variables.ts
├── 02-any.ts
├── 03-const-let.ts
├── ... (15 ejercicios)
├── package.json
└── README.md ← ¡ESTE!
