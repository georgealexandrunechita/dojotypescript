// Variables y tipos- Jugador

let nombre: string = "Alex";
let nivel: number = 5;
let activo: boolean = true;

console.log("Nombre: ", nombre);
console.log("Nivel: ", nivel);
console.log("Activo", activo);

// Tipo any - inventario
let item: any = "Espada";
console.log("Item:", item);

item = 10;
console.log("Cantidad: ", item);

// Constantes y let - puntos

const MAX_VIDAS: number = 3;
let vidas: number = 3;

console.log("Max vidas: ", MAX_VIDAS);
vidas--;
console.log("Vidas actuales: ", vidas);

//Operaciones básicas - combate

let ataque: number = 15;
let defensa: number = 8;
let dano: number = ataque - defensa;

console.log("Daño:", dano);

// Funciones simples - curar

function curar(puntosVida: number, curacion: number): number {
    return puntosVida + curacion;
}

console.log("Curar 50+10:", curar(50, 10));
console.log("Curar 30+20", curar(30, 20));
console.log("Curar 80+5", curar(80, 5));

// Arreglos y forEach

let armas: string[] = ["Espada", "Arco", "Martillo"];
let vidasPociones: number[] = [20, 30, 15];

armas.forEach((arma, i) => console.log(`Arma ${i}: ${arma}`));
vidasPociones.forEach((vida) => console.log("Poción:", vida));

// Tuplas - item del jugador

let item2: [string, number] = ["Espada", 25];
console.log("Arma:", item[0], "Daño:", item[1]);

// Interfaces - personaje

interface Personaje {
    nombre: string;
    nivel: number;
    salud: number;
}

let heroe: Personaje = { nombre: "Alex", nivel: 10, salud: 100 };
console.log(heroe);

//Funciones con interfaces - presentación

interface Personaje {
    nombre: string;
    nivel: number;
    salud: number;
}

function presentar(personaje: Personaje): void {
    console.log(
        `Soy ${personaje.nombre}, nivel ${personaje.nivel}, con ${personaje.salud} puntos de vida`,
    );
}

presentar({ nombre: "Alex", nivel: 10, salud: 100 });

//Enum - clases personaje

enum ClasePersonaje {
    Guerrero,
    Mago,
    Arquero,
    Sanador,
}

function getClase(numero: number): string {
    return ClasePersonaje[numero];
}

console.log("Clase 0:", getClase(0)); // Guerrero
console.log("Clase 1:", getClase(1)); // Mago

// Clase básica - juego

class PersonajeJuego {
    nombre: string;
    nivel: number;
    salud: number;

    constructor(nombre: string, nivel: number, salud: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.salud = salud;
    }

    mostrarInfo(): void {
        console.log(`${this.nombre} - Nivel ${this.nivel} - Salud ${this.salud}`);
    }
}

let pj = new PersonajeJuego("Alex", 10, 100);
pj.mostrarInfo();

// Herencia - especializaciones

class PersonajeJuego {
    nombre: string;
    nivel: number;
    salud: number;

    constructor(nombre: string, nivel: number, salud: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.salud = salud;
    }

    mostrarInfo(): void {
        console.log(`${this.nombre} - Nivel ${this.nivel} - Salud ${this.salud}`);
    }
}

class Guerrero extends PersonajeJuego {
    fuerza: number;

    constructor(nombre: string, nivel: number, salud: number, fuerza: number) {
        super(nombre, nivel, salud);
        this.fuerza = fuerza;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log("Fuerza:", this.fuerza);
    }
}

class Mago extends PersonajeJuego {
    mana: number;

    constructor(nombre: string, nivel: number, salud: number, mana: number) {
        super(nombre, nivel, salud);
        this.mana = mana;
    }

    mostrarInfo(): void {
        super.mostrarInfo();
        console.log("Mana:", this.mana);
    }
}

new Guerrero("Guts", 15, 150, 30).mostrarInfo();
new Mago("Gandalf", 20, 80, 200).mostrarInfo();

// Arreglo de objetos - batalla

let batalla: PersonajeJuego[] = [
    new Guerrero("Guts", 15, 150, 30),
    new Mago("Gandalf", 20, 80, 200),
    new Guerrero("Conan", 12, 120, 25),
    new Mago("Merlin", 18, 90, 180),
];

batalla.forEach((p) => p.mostrarInfo());

// Funciones genéricas - Loot

function getPrimero<T>(array: T[]): T {
    return array[0];
}

let armas2: string[] = ["Espada", "Arco"];
let pociones: number[] = [20, 30];

console.log("Primera arma:", getPrimero(armas));
console.log("Primera poción:", getPrimero(pociones));

// Gestión de juego

class Jugador {
    nombre: string;
    nivel: number;
    salud: number;

    constructor(nombre: string, nivel: number, salud: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.salud = salud;
    }

    mostrarInfo(): void {
        console.log(`${this.nombre} - Nivel ${this.nivel} - Salud ${this.salud}`);
    }
}

class JugadorGuerrero extends Jugador {
    fuerza: number;
    constructor(nombre: string, nivel: number, salud: number, fuerza: number) {
        super(nombre, nivel, salud);
        this.fuerza = fuerza;
    }
    mostrarInfo(): void {
        super.mostrarInfo();
        console.log("Fuerza:", this.fuerza);
    }
}

class JugadorMago extends Jugador {
    mana: number;
    constructor(nombre: string, nivel: number, salud: number, mana: number) {
        super(nombre, nivel, salud);
        this.mana = mana;
    }
    mostrarInfo(): void {
        super.mostrarInfo();
        console.log("Mana:", this.mana);
    }
}

let jugadores: Jugador[] = [
    new JugadorGuerrero("Alex", 10, 100, 20),
    new JugadorMago("Mira", 12, 90, 150),
    new JugadorGuerrero("Thor", 15, 150, 35),
    new JugadorMago("Luna", 11, 85, 120),
];

jugadores.forEach((j) => j.mostrarInfo());
