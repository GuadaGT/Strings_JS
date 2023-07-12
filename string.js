const nombre = "Guadalupe";

const apellido = "Gutierrez";

const estudiante = nombre.concat(" ", apellido);

const estudianteMayus = estudiante.toUpperCase();

const estudianteMinus = estudiante.toLowerCase();

const caracteresEstudiante = estudiante.length;

const primeraLetraNombre = nombre.charAt(0);

const ultimaLetraApellido = apellido.slice(-1);

const estudianteSinEspacios = estudiante.replace(/\s/g, '');

const nombreContent = estudiante.includes(nombre);

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Estudiante:", estudiante);
console.log("Estudiante en mayúsculas:", estudianteMayus);
console.log("Estudiante en minúsculas:", estudianteMinus);
console.log("Número de letras de 'estudiante':", caracteresEstudiante);
console.log("Primera letra del Nombre:", primeraLetraNombre);
console.log("Última letra del Apellido:", ultimaLetraApellido);
console.log("Estudiante sin espacios:", estudianteSinEspacios);
console.log("¿El Nombre está contenido en 'estudiante'?", nombreContent);