
const materiasPorColumna = [
  [
    { id: "matematicas", nombre: "Matemáticas", prerrequisitos: [] },
    { id: "bases_sociologicas", nombre: "Bases Sociológicas para el TS", prerrequisitos: [] },
    { id: "fundamentos_ts", nombre: "Fundamentos del TS", prerrequisitos: [] },
    { id: "expresion_oral", nombre: "Expresión Oral y Escrita", prerrequisitos: [] },
    { id: "autodesarrollo", nombre: "Autodesarrollo", prerrequisitos: [] }
  ],
  [
    { id: "estadistica1", nombre: "Estadística I", prerrequisitos: ["matematicas"] },
    { id: "epistemologia", nombre: "Epistemología", prerrequisitos: [] },
    { id: "ts_disciplina", nombre: "TS como Disciplina", prerrequisitos: ["fundamentos_ts"] },
    { id: "antropologia", nombre: "Antropología Social", prerrequisitos: ["bases_sociologicas"] },
    { id: "psicologia_general", nombre: "Psicología General", prerrequisitos: [] },
    { id: "informatica", nombre: "Informática Básica", prerrequisitos: [] }
  ],
  [
    { id: "estadistica2", nombre: "Estadística II", prerrequisitos: ["estadistica1"] },
    { id: "inv_social1", nombre: "Investigación Social I", prerrequisitos: ["epistemologia"] },
    { id: "metodos_intervencion", nombre: "Métodos de Intervención", prerrequisitos: ["ts_disciplina"] },
    { id: "ecologia", nombre: "Ecología Humana", prerrequisitos: [] },
    { id: "psicologia_social", nombre: "Psicología Social", prerrequisitos: ["psicologia_general"] },
    { id: "teoria_sociopolitica", nombre: "Teoría Sociopolítica", prerrequisitos: [] }
  ],
  [
    { id: "comunicacion", nombre: "Comunicación", prerrequisitos: [] },
    { id: "estudios_poblacion", nombre: "Estudios de Población", prerrequisitos: ["estadistica1"] },
    { id: "ts_grupo", nombre: "TS con Grupo", prerrequisitos: ["metodos_intervencion"] },
    { id: "tecnicas_grupales", nombre: "Técnicas Grupales", prerrequisitos: [] },
    { id: "economia", nombre: "Economía Política", prerrequisitos: [] },
    { id: "historia", nombre: "Historia Contemporánea de Venezuela", prerrequisitos: [] }
  ],
  [
    { id: "inv_social2", nombre: "Investigación Social II", prerrequisitos: ["estadistica2", "inv_social1"] },
    { id: "legislacion", nombre: "Legislación Social", prerrequisitos: [] },
    { id: "ts_comunitario", nombre: "TS en el ámbito comunitario", prerrequisitos: ["ts_grupo"] },
    { id: "planificacion", nombre: "Planificación Social", prerrequisitos: ["metodos_intervencion"] },
    { id: "estado_politica", nombre: "Estado y Política Social", prerrequisitos: ["economia"] },
    { id: "ingles", nombre: "Inglés", prerrequisitos: [] }
  ],
  [
    { id: "inv_social3", nombre: "Investigación Social III", prerrequisitos: ["inv_social2"] },
    { id: "admin_gerencia", nombre: "Administración y Gerencia Social", prerrequisitos: ["estado_politica"] },
    { id: "ts_familia", nombre: "TS con Individuo y Familia", prerrequisitos: [] },
    { id: "form_eval_proyectos", nombre: "Formulación y Evaluación de Proyectos Sociales", prerrequisitos: ["planificacion"] },
    { id: "indicadores", nombre: "Indicadores Sociales", prerrequisitos: ["planificacion", "estudios_poblacion"] },
    { id: "electiva1", nombre: "Electiva I", prerrequisitos: [] }
  ],
  [
    { id: "practica1", nombre: "Prácticas TS I", prerrequisitos: ["ts_comunitario", "admin_gerencia"] },
    { id: "seguridad_social", nombre: "Seguridad Social", prerrequisitos: [] },
    { id: "electiva2", nombre: "Electiva II", prerrequisitos: [] }
  ],
  [
    { id: "computacion", nombre: "Computación aplicada", prerrequisitos: ["inv_social3"] },
    { id: "practica2", nombre: "Prácticas TS II", prerrequisitos: ["practica1"] },
    { id: "orientacion_familiar", nombre: "Orientación Familiar", prerrequisitos: ["ts_familia"] }
  ],
  [
    { id: "practica3", nombre: "Prácticas TS III", prerrequisitos: ["practica2", "orientacion_familiar"] },
  ],
  [
    { id: "trabajo_de_grado", nombre: "Trabajo de grado", prerrequisitos: [] }
    { id: "servicio_comunitario", nombre: "Seminario Servicio Comunitario", prerrequisitos: [] }
  ]
];

function crearMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = "";

  materiasPorColumna.forEach((columna, i) => {
    const col = document.createElement("div");
    col.classList.add("columna");

    columna.forEach(m => {
      const div = document.createElement("div");
      div.classList.add("materia");
      div.textContent = m.nombre;
      div.dataset.id = m.id;
      div.dataset.prerequisitos = JSON.stringify(m.prerrequisitos);

      if (!m.prerrequisitos.length || m.prerrequisitos.every(p => localStorage.getItem(p))) {
        div.classList.add("desbloqueada");
      } else {
        div.classList.add("bloqueada");
      }

      if (localStorage.getItem(m.id)) {
        div.classList.add("aprobada");
      }

      div.addEventListener("click", () => {
        if (!div.classList.contains("bloqueada")) {
          div.classList.toggle("aprobada");
          if (div.classList.contains("aprobada")) {
            localStorage.setItem(m.id, true);
          } else {
            localStorage.removeItem(m.id);
          }
          crearMalla();
        }
      });

      col.appendChild(div);
    });

    container.appendChild(col);
  });
}

document.getElementById("reiniciar").addEventListener("click", () => {
  localStorage.clear();
  crearMalla();
});

crearMalla();
