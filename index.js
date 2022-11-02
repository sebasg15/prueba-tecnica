const foto1 = document.querySelector('.foto1');
const foto2 = document.querySelector('.foto2');
const foto3 = document.querySelector('.foto3');
const foto4 = document.querySelector('.foto4');

const titulo1 = document.querySelector('.titulo1');
const titulo2 = document.querySelector('.titulo2');
const titulo3 = document.querySelector('.titulo3');
const titulo4 = document.querySelector('.titulo4');

const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2');
const title3 = document.querySelector('.title3');
const title4 = document.querySelector('.title4');

const silla1 = document.querySelector('.silla1');
const silla2 = document.querySelector('.silla2');
const silla3 = document.querySelector('.silla3');
const silla4 = document.querySelector('.silla4');

const precio1 = document.querySelector('.precio1');
const precio2 = document.querySelector('.precio2');
const precio3 = document.querySelector('.precio3');
const precio4 = document.querySelector('.precio4');

function botones(padre, botonS, ver, texto, evento, color) {
	return padre.addEventListener(evento, () => {
		document.querySelector(`.${botonS}`).style.display = ver;
		if (padre) {
			texto.style.background = color;
		}
	});
}
botones(foto1, 'btn1', 'block', titulo1, 'mouseover', 'white');
botones(foto2, 'btn2', 'block', titulo2, 'mouseover', 'white');
botones(foto3, 'btn3', 'block', titulo3, 'mouseover', 'white');
botones(foto4, 'btn4', 'block', titulo4, 'mouseover', 'white');
//quitanto estilos
botones(foto1, 'btn1', 'none', titulo1, 'mouseout', 'none');
botones(foto2, 'btn2', 'none', titulo2, 'mouseout', 'none');
botones(foto3, 'btn3', 'none', titulo3, 'mouseout', 'none');
botones(foto4, 'btn4', 'none', titulo4, 'mouseout', 'none');

function botonesDiv(padre, texto, evento, color) {
	return padre.addEventListener(evento, () => {
		if (padre) {
			texto.style.background = color;
		}
	});
}
botonesDiv(silla1, silla1, 'mouseover', 'white');
botonesDiv(silla2, silla2, 'mouseover', 'white');
botonesDiv(silla3, silla3, 'mouseover', 'white');
botonesDiv(silla4, silla4, 'mouseover', 'white');

botonesDiv(silla1, silla1, 'mouseout', 'none');
botonesDiv(silla2, silla2, 'mouseout', 'none');
botonesDiv(silla3, silla3, 'mouseout', 'none');
botonesDiv(silla4, silla4, 'mouseout', 'none');

function addPrecios(silla, evento, precio, ver) {
	return silla.addEventListener(evento, () => {
		if (silla) {
			precio.style.display = ver;
		}
	});
}
addPrecios(silla1, 'mouseover', precio1, 'block');
addPrecios(silla2, 'mouseover', precio2, 'block');
addPrecios(silla3, 'mouseover', precio3, 'block');
addPrecios(silla4, 'mouseover', precio4, 'block');
addPrecios(silla1, 'mouseout', precio1, 'none');
addPrecios(silla2, 'mouseout', precio2, 'none');
addPrecios(silla3, 'mouseout', precio3, 'none');
addPrecios(silla4, 'mouseout', precio4, 'none');
