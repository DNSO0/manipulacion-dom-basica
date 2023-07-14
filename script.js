const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick() {
    const sumaInputs = (input1.value * 1) + Math.floor(input2.value);
    pResult.innerText = "Resultado: "
+ sumaInputs};



/* const p = document.querySelectorAll('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.getElementById('pid'); */

/* console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});
 */
//h1.innerText = 'Titulo <br> Manipulado';
/* console.log(h1.getAttribute('marcaX'));
h1.setAttribute('marcaX', 'Modificado');
h1.classList.add('añadido');
h1.classList.add('añadido2');
h1.classList.remove('añadido');
//h1.classList.toggle() --- añadir o quitar segun eventos
//h1.classList.contains() --- true o false segun si tiene la calse que estamos preguntando 

//input.value = 'Valor desde JS';

const img = document.createElement('img');
img.setAttribute('src', 'https://elcorreoweb.es/binrepository/761x400/43c0/675d400/none/10703/BDIX/eca-gatos-negros_20980457_20221227101253.jpg');
console.log(img);

/* pid.innerText=' ';
pid.append(img); */ 