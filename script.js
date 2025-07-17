const materias = [
  // I semestre
  { nombre: "Matemáticas", prerequisitos: [], semestre: 1 },
  { nombre: "Bases Sociológicas para el Trabajo Social", prerequisitos: [], semestre: 1 },
  { nombre: "Fundamentos del trabajo social", prerequisitos: [], semestre: 1 },
  { nombre: "Expresión Oral y escrita", prerequisitos: [], semestre: 1 },
  { nombre: "Autodesarrollo", prerequisitos: [], semestre: 1 },

  // II semestre
  { nombre: "Estadística I", prerequisitos: ["Matemáticas"], semestre: 2 },
  { nombre: "Epistemología de las ciencias sociales", prerequisitos: [], semestre: 2 },
  { nombre: "Trabajo social como disciplina y profesión", prerequisitos: ["Fundamentos del trabajo social"], semestre: 2 },
  { nombre: "Antropología Social", prerequisitos: ["Bases Sociológicas para el Trabajo Social"], semestre: 2 },
  { nombre: "Psicología General", prerequisitos: [], semestre: 2 },
  { nombre: "Informática Básica", prerequisitos: [], semestre: 2 },

  // III semestre
  { nombre: "Estadística II", prerequisitos: ["Estadística I"], semestre: 3 },
  { nombre: "Investigación Social I", prerequisitos: ["Epistemología de las ciencias sociales", "Estadística I"], semestre: 3 },
  { nombre: "Métodos de Intervención Profesional en el Trabajo Social", prerequisitos: ["Trabajo social como disciplina y profesión"], semestre: 3 },
  { nombre: "Ecología Humana", prerequisitos: [], semestre: 3 },
  { nombre: "Psicología Social", prerequisitos: ["Psicología General"], semestre: 3 },
  { nombre: "Teoría Socio-política", prerequisitos: [], semestre: 3 },

  // IV semestre
  { nombre: "Comunicación", prerequisitos: [], semestre: 4 },
  { nombre: "Estudios de Población", prerequisitos: ["Estadística I"], semestre: 4 },
  { nombre: "Trabajo Social con Grupo", prerequisitos: ["Métodos de Intervención Profesional en el Trabajo Social"], semestre: 4 },
  { nombre: "Técnicas Grupales", prerequisitos: [], semestre: 4 },
  { nombre: "Economía Política", prerequisitos: [], semestre: 4 },
  { nombre: "Historia Contemporánea de Venezuela", prerequisitos: [], semestre: 4 },

  // V semestre
  { nombre: "Investigación Social II", prerequisitos: ["Estadística II", "Investigación Social I"], semestre: 5 },
  { nombre: "Legislación Social", prerequisitos: [], semestre: 5 },
  { nombre: "Trabajo Social en el ámbito comunitario", prerequisitos: ["Trabajo Social con Grupo"], semestre: 5 },
  { nombre: "Planificación Social", prerequisitos: ["Métodos de Intervención Profesional en el Trabajo Social"], semestre: 5 },
  { nombre: "Estado y Política Social", prerequisitos: ["Economía Política"], semestre: 5 },
  { nombre: "Inglés", prerequisitos: [], semestre: 5 },

  // VI semestre
  { nombre: "Investigación Social III", prerequisitos: ["Investigación Social II"], semestre: 6 },
  { nombre: "Administración y Gerencia Social", prerequisitos: ["Estado y Política Social"], semestre: 6 },
  { nombre: "Trabajo Social con Individuo y Familia", prerequisitos: [], semestre: 6 },
  { nombre: "Formulación y Evaluación de Proyectos Sociales", prerequisitos: ["Planificación Social"], semestre: 6 },
  { nombre: "Indicadores Sociales", prerequisitos: ["Estudios de Población", "Planificación Social"], semestre: 6 },
  { nombre: "Electiva I", prerequisitos: [], semestre: 6 },

  // VII semestre
  { nombre: "Prácticas de Trabajo Social I", prerequisitos: ["Trabajo Social en el ámbito comunitario", "Administración y Gerencia Social"], semestre: 7 },
  { nombre: "Seguridad Social", prerequisitos: ["Estado y Política Social"], semestre: 7 },
  { nombre: "Electiva II", prerequisitos: [], semestre: 7 },

  // VIII semestre
  { nombre: "Computación Aplicada a las Ciencias Sociales", prerequisitos: ["Investigación Social III"], semestre: 8 },
  { nombre: "Prácticas de Trabajo Social II", prerequisitos: ["Prácticas de Trabajo Social I"], semestre: 8 },
  { nombre: "Orientación Familiar", prerequisitos: ["Trabajo Social con Individuo y Familia"], semestre: 8 },

  // IX semestre
  { nombre: "Prácticas de Trabajo Social III", prerequisitos: ["Prácticas de Trabajo Social II", "Orientación Familiar"], semestre: 9 },

  // X semestre
  { nombre: "Trabajo de Grado", prerequisitos: [], semestre: 10 },
  { nombre: "Seminario Servicio Comunitario", prerequisitos: [], semestre: 10 }
];

const columnas = [5, 6, 6, 6, 6, 6, 3, 3, 1, 2]; // Columnas por semestre
