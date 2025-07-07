// Creación de arreglos: Lista de especialistas disponibles
let especialistas = [
  { nombre: "Sofía Ramírez", rol: "Estratega" },
  { nombre: "Diego Vargas", rol: "Redactor" },
  { nombre: "Clara Morales", rol: "Diseñadora Gráfica" }
];

// TODO 1: push
especialistas.push({ nombre: "Lucía Fernández", rol: "Analista de Datos" });
console.log("Después de push:", especialistas);

// TODO 2: pop
let eliminadoPop = especialistas.pop();
console.log("Especialista eliminado con pop:", eliminadoPop);
console.log("Después de pop:", especialistas);

// TODO 3: unshift
especialistas.unshift({ nombre: "Mateo González", rol: "Community Manager" });
console.log("Después de unshift:", especialistas);

// TODO 4: shift
let eliminadoShift = especialistas.shift();
console.log("Especialista eliminado con shift:", eliminadoShift);
console.log("Después de shift:", especialistas);

// TODO 5: slice
let sublista = especialistas.slice(0, 2);
console.log("Sublista con slice (primeros 2):", sublista);

// Arreglo multidimensional: Campañas con especialistas
let campanas = [
  [
    { nombre: "Sofía Ramírez", rol: "Estratega" },
    { nombre: "Diego Vargas", rol: "Redactor" }
  ],
  [
    { nombre: "Clara Morales", rol: "Diseñadora Gráfica" },
    { nombre: "Lucía Fernández", rol: "Analista de Datos" }
  ]
];

// TODO 6: forEach para reporte por campaña
campanas.forEach((campana, index) => {
  console.log(`Campaña ${index + 1}:`);
  campana.forEach(especialista => {
    console.log(`- ${especialista.nombre} (${especialista.rol})`);
  });
});

// TODO 7: for...of para contar especialistas por campaña
let numeroCampana = 1;
for (let campana of campanas) {
  console.log(`Campaña ${numeroCampana} tiene ${campana.length} especialistas`);
  numeroCampana++;
}

// TODO 8: map para crear arreglo con nombres en mayúsculas
let especialistasMayus = especialistas.map(especialista => ({
  nombre: especialista.nombre.toUpperCase(),
  rol: especialista.rol
}));
console.log("Especialistas con nombres en mayúsculas:", especialistasMayus);

// TODO 9: función para generar reporte completo
function generarReporte(campanas) {
  console.log("Reporte Completo:");
  for (let i = 0; i < campanas.length; i++) {
    let campana = campanas[i];
    console.log(`Campaña ${i + 1} (${campana.length} especialistas):`);
    for (let j = 0; j < campana.length; j++) {
      let especialista = campana[j];
      console.log(`  ${j + 1}. ${especialista.nombre} - ${especialista.rol}`);
    }
  }
}

generarReporte(campanas);
