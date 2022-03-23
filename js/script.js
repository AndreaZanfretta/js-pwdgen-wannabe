/* graph TD
js -->A
A[Dichiarazione variabile nome] --> B[dichiarazione variabile cognome]
B --> C[Dichiarazione variabile colore]
C --> D[Assegnazione valore a nome tramite prompt]
D --> E[Assegnazione valore a cognome tramite prompt]
E --> F[Assegnazione valore a colore tramite prompt]
F --> G[Dichiarazione e assegnazione alla variabile password tramite id il proprio contenuto più nome, cognome, colore e 21]
G --> M

HTML --> H
H[Creazione struttura] --> I[creare DIV con id password]
I --> L[linkare con tag script src il nostro file .js]

L --> M[Salvare e testare lo script] */

let nome;
let cognome;
let colore;

nome = prompt("Come ti chiami?");
cognome = prompt("Qual è il tuo cognome?");
colore = prompt("Qual è il colore preferito?");

let password = document.getElementById("password").innerHTML += nome + cognome + colore + "21";