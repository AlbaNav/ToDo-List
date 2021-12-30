//selectores
const todoInput = document.querySelector("input");
const todoButton = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

todoButton.addEventListener("click", (e) => {
  e.preventDefault();

  const text = todoInput.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    todoInput.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}

meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
lasemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
diassemana = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"];
window.onload = function () {
  hoy = new Date();
  diasemhoy = hoy.getDay();
  diahoy = hoy.getDate();
  meshoy = hoy.getMonth();
  annohoy = hoy.getFullYear();
  tit = document.getElementById("titulos");
  ant = document.getElementById("anterior");
  pos = document.getElementById("posterior");
  f0=document.getElementById("fila0");
  pie=document.getElementById("fechaactual");
  pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+annohoy;
  document.buscar.buscaanno.value=annohoy;
  mescal = meshoy;
  annocal = annohoy
  cabecera() 
primeralinea()
escribirdias()
};

function cabecera() {
    tit.innerHTML=meses[mescal]+" de "+annocal;
    mesant=mescal-1; 
    mespos=mescal+1; 
    if (mesant<0) {mesant=11;}
    if (mespos>11) {mespos=0;}
    ant.innerHTML=meses[mesant]
    pos.innerHTML=meses[mespos]
    } 

    function primeralinea() {
        for (i=0;i<7;i++) {
            celda0=f0.getElementsByTagName("th")[i];
            celda0.innerHTML=diassemana[i]
            }
        }