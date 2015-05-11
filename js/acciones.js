//JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$ ('#siguiente_fecha') .on ('top' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
	
}); 
});

$(document).ready(function(e) {
	var nombre;
	$('#siguiente_nombre').click(function(e){
		nombre=$('#txtnombre').val();
		
		
	});//click siguiente nombre
	
	$('#siguiente_fecha').click(function(e){
		var fecha= new Date();
		

		fechaAct = new Date(fecha.getFullYear() + '/' +(fecha.getMonth()+1) +'/'+ fecha.getDate());

		var diacum=$('#diacumple').val();
		var mescum=$('#mescumple').val();
		var aniocum=$('#aniocumple').val();

		fechaCum=new Date(fecha.getFullYear() +'/'+ mescum +'/'+ diacum);
		fechaCuAc = fechaCum;
		

	
	if(fechaCum > fechaAct)
	{
       cuando=fechaCum-fechaAct;
	   faltan=((((cuando/1000)/60)/60)/24);
	  
	}
	else
	{
	fechaCum=new Date((fecha.getFullYear()+1) +'/'+ mescum +'/'+ diacum);
	  cuando=fechaCum-fechaAct;
	   faltan=((((cuando/1000)/60)/60)/24);
	   
	}
	$('#Mnombre').text(nombre +' FALTAN');
		$('#Mdias').text(faltan);
		if (faltan==1)
		{
		$('#Mcumple').text('DIA PARA TU CUMPLE');
		}
		else
		{
			$('#Mcumple').text('DIAS PARA TU CUMPLE');
		}
		if (faltan <7)
		{
				
	$('#Mfelicidades').show();}

		edad=fecha.getFullYear()-aniocum;
		if (fechaCuAc > fechaA)
		{
			edad=edad-1;
			$('#Medad').text('TIENES '+ edad  + ' AÑOS HOY');
		}
		else
		{
		$('#Medad').text('TIENES '+ edad  +  'AÑOS HOY');
		}
			function redondeo(numero, decimales)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
return resultado;
}
});// click fecha siguiente

	});//ready

