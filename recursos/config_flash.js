// titulo de la pestaNa
window.document.title='Personal Best A1 ';

// interface con flash
function cerrarVentana(){
	
}
var appObject = document.getElementById("appObject");
var appEmbed = document.getElementById("appEmbed");
function maximizarApp(){
	appObject.style.width = appEmbed.style.width = "100%";
}
function restaurarApp(){
	appObject.style.width = appEmbed.style.width = 1024;
}