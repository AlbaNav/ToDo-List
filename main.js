//selectores
const todoInput = document.querySelector("input");
const todoButton = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
const empty2=document.querySelector(".empty2")
const find$$=document.querySelector('.search');
const findBtn$$=document.querySelector('.searchTask');
const ulSearch = document.querySelectorAll(".segundo");
const searchinput=document.querySelector('.buscatask');


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
findBtn$$.addEventListener("click", (e) => {
    e.preventDefault();
  
    const text2 = searchinput.value;
  
    if (text2 !== "") {
      const li2 = document.createElement("li");
      const p2 = document.createElement("p");
      p2.textContent = text2;
  
      li2.appendChild(p2);
      l2.appendChild(addDeleteBtn());
      ulSearch.appendChild(li2);
  
      searchinput.value = "";
      empty2.style.display = "none";
    }
  });
  
  for (const input of todoInput.value) {
     if (searchinput.value.toLowerCase().includes(input.value.toLowerCase())) {
         print(searchinput);   
         searchinput.appendChild(find$$);        
 }}
 findBtn$$.addEventListener("click", searchinput);


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


meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre",
  "noviembre","diciembre",];
lasemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado",];
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
  f0 = document.getElementById("fila0");
  pie = document.getElementById("fechaactual");
  pie.innerHTML += lasemana[diasemhoy] +", " +diahoy +" de " + meses[meshoy] +" de " + annohoy;
  document.buscar.buscaanno.value = annohoy;
  mescal = meshoy;
  annocal = annohoy;
  cabecera();
  primeralinea();
  escribirdias();
};

function cabecera() {
  tit.innerHTML = meses[mescal] + " de " + annocal;
  mesant = mescal - 1;
  mespos = mescal + 1;
  if (mesant < 0) {
    mesant = 11;
  }
  if (mespos > 11) {
    mespos = 0;
  }
  ant.innerHTML = meses[mesant];
  pos.innerHTML = meses[mespos];
}

function primeralinea() {
  for (i = 0; i < 7; i++) {
    celda0 = f0.getElementsByTagName("th")[i];
    celda0.innerHTML = diassemana[i];
  }
}
function escribirdias() {
  primeromes = new Date(annocal, mescal, "1");
  prsem = primeromes.getDay();
  prsem--;
  if (prsem == -1) {
    prsem = 6;
  }
  diaprmes = primeromes.getDate();
  prcelda = diaprmes - prsem;
  empezar = primeromes.setDate(prcelda);
  diaMes = new Date();
  diaMes.setTime(empezar);

  diaMes.setTime(empezar);
  for (i = 1; i < 7; i++) {
    fila = document.getElementById("fila" + i);
    for (j = 0; j < 7; j++) {
      midia = diaMes.getDate();
      mimes = diaMes.getMonth();
      mianno = diaMes.getFullYear();
      celda = fila.getElementsByTagName("td")[j];
      celda.innerHTML = midia;
      midia = midia + 1;
      diaMes.setDate(midia);

      for (i = 1; i < 7; i++) {
        fila = document.getElementById("fila" + i);
        for (j = 0; j < 7; j++) {
          midia = diaMes.getDate();
          mimes = diaMes.getMonth();
          mianno = diaMes.getFullYear();
          celda = fila.getElementsByTagName("td")[j];
          celda.innerHTML = midia;
          celda.style.backgroundColor = "#9bf5ff";
          celda.style.color = "#492736";
          if (j == 6) {
            celda.style.color = "#f11445";
          }
          if (mimes != mescal) {
            celda.style.color = "#a0babc";
          }
          if (mimes == meshoy && midia == diahoy && mianno == annohoy) {
            celda.style.backgroundColor = "#f0b19e";
            celda.innerHTML = "<cite title='Fecha Actual'>" + midia + "</cite>";
          }
          midia = midia + 1;
          diaMes.setDate(midia);
        }
      }
    }
  }
}
function mesantes() {
  nuevomes = new Date();
  primeromes--;
  nuevomes.setTime(primeromes);
  mescal = nuevomes.getMonth();
  annocal = nuevomes.getFullYear();
  cabecera();
  escribirdias();
}
function mesdespues() {
  nuevomes = new Date();
  tiempounix = primeromes.getTime();
  tiempounix = tiempounix + 45 * 24 * 60 * 60 * 1000;
  nuevomes.setTime(tiempounix);
  mescal = nuevomes.getMonth();
  annocal = nuevomes.getFullYear();
  cabecera();
  escribirdias();
}
function actualizar() {
  mescal = hoy.getMonth();
  annocal = hoy.getFullYear();
  cabecera();
  escribirdias();
}

function mifecha() {
  mianno = document.buscar.buscaanno.value;
  listameses = document.buscar.buscames;
  opciones = listameses.options;
  num = listameses.selectedIndex;
  mimes = opciones[num].value;
  if (isNaN(mianno) || mianno < 1) {
    alert("El año no es válido:\n debe ser un número mayor que 0");
  } else {
    mife = new Date();
    mife.setMonth(mimes);
    mife.setFullYear(mianno);
    mescal = mife.getMonth();
    annocal = mife.getFullYear();
    cabecera();
    escribirdias();
  }
}

