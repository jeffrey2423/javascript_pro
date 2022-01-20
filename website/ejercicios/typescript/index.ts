//Boolean
let muted: boolean = true;

//Numeros
let numero:number = 2 ;

//String
let nombre:string = 'jeffrey';

//Arreglos
let people:string[] = [];
people = ["jeffrey", "rios"];
people.push('hola');

let peopleAnsNumbers: Array<string | number > = [];
peopleAnsNumbers.push("jeffrey");
peopleAnsNumbers.push(9000);

//Enum
enum Colores {
    Rojo,
    Verde,
    Azul
};

let favColor: Colores = Colores.Azul;

//Any, cualquier tipo
let cualquier: any = 'joker';
cualquier = {}

//object
let someObject: object = {}


//FUNCIONES
function add(a:number,b:number):number{
    return a + b;
};

const sum: number = add(1,3);

function createAdder(a:number): (number) => number {
    return function (b:number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

function fullName(firsName:string, lastName:string = "Rios"): string {
    return `${firsName} ${lastName}`;
}

function fullName2(firsName:string, lastName?:string): string {
    return `${firsName} ${lastName}`;
}

const jeffrey = fullName('Jeffrey');


//Interfaces
interface Rectangulo{
    ancho:number;
    alto:number;
    color?:Colores; //? = Opcional
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Colores.Azul
}

function area(r:Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

console.log(rect.toString());

rect.toString = function() {
    return `Un rectangulo ${this.color}`;
}