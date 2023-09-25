// console.log('Hello World!');

let name1: string = "Ming"
let age1: number
let boolean: boolean = true
const birthYear: number = 1984

age1 = 2023 - birthYear

// console.log(age)

function funktionName(name: string, age: number): string {
    return name + " " + age
}

// console.log(funktionName(name1, age1))

console.log("=== Aufgabe ===")

// Schritt 1: Deklariert eine Variable vom Typ 'number' mit dem Namen 'age' und weist ihr einen Wert zu.
let age: number = 23

// Schritt 2: Schreibt eine 'for'-Schleife, die die Zahlen von 1 bis 'age' ausgibt.
for (let i = 1; i <= age; i++) {
    console.log(i)
}

// Schritt 3: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'age' größer als 18 ist.
if (age > 18) {
    console.log(name1 + " ist älter als 18 Jahre alt")
} else {
    console.log(name1 + " ist leider erst " + age)
}

// Schritt 4: Deklariert eine Variable 'score' vom Typ 'number' und weist ihr den Wert 0 zu.
let score: number = 0
// Schritt 5: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'score' einen Wert hat.
/*if (score === 0) {

} else {
    console.log("Score ist verfügbar")
}*/
// Schritt 6: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'score' als 'truthy' Wert ausgewertet wird.

if (score) {
    console.log("Score wird als truthy ausgewertet.")
}

// Schritt 7: Deklariert eine Variable 'username' vom Typ 'string' und weist ihr den Wert '' (leerer String) zu.
let username: string = ''

// Schritt 8: Nutzt eine 'if'-Anweisung, um zu überprüfen, ob 'username' einen Wert hat.
if (username) {
    console.log("Username ist verfügbar: " + username)
}
// Schritt 9: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'username' als 'falsy' Wert ausgewertet wird.
if (!username) {
    console.log("Username wird als falsy ausgewertet.")
}

// Schritt 10: Deklariert eine Variable 'isAdmin' vom Typ 'boolean' und weist ihr den Wert 'false' zu.
let isAdmin: boolean = false

// Schritt 11: Nutzt eine 'if-else'-Anweisung, um zu überprüfen, ob 'isAdmin' als 'truthy' Wert ausgewertet wird.
if (isAdmin) {
    console.log("Admin ist verfügbar.")
} else {
    console.log("isAdmin ist false.")
}