// tu codigo va aca
function callbackPromedio(a, b, c, callback){
	var promedio = (a + b + c) / 3;
	var miFuncion = callback(promedio);
	return miFuncion;
}

var segundos = 1;

function segundero(){
document.getElementById('titulo').innerHTML = segundos;
segundos ++;
return segundos;
}

setInterval(segundero, 1000);
