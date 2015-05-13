// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$ ('#btncomenzar') .on ('tap' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
   $ ('#btninicio') .on ('tap' , function () { 
  navigator .vibrate (1000);
 });//  tap a btnvibrar
	
}); 
//});

$(document).ready(function(e) {
	var nombre;
	$('#btnfecha').click(function(e){
		nombre=$('#txtnombre').val();
		
		
	});//click siguiente nombre
	
	$('#btnresultado').click(function(e){
		var fecha= new Date();
		

		fechaA = new Date(fecha.getFullYear() + '/' +(fecha.getMonth()+1) +'/'+ fecha.getDate());

		var diaC=$('#txtdia').val();
		var mesC=$('#txtmes').val();
		var yearC=$('#txtyear').val();

		fechaC=new Date(fecha.getFullYear() +'/'+ mesC +'/'+ diaC);
		fechaCA = fechaC;
		

	
	if(fechaC > fechaA)
	{
       cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	  
	}
	else
	{
	fechaC=new Date((fecha.getFullYear()+1) +'/'+ mesC +'/'+ diaC);
	  cuando=fechaC-fechaA;
	   faltan=((((cuando/1000)/60)/60)/24);
	   
	}
	$('#divnombre').text(nombre +' FALTAN');
		$('#divdias').text(faltan);
		if (faltan==1)
		{
		$('#divcumple').text('DIA PARA SU CUMPLEAÑOS');
		}
		else
		{
			$('#divcumple').text('DIAS PARA SU CUMPLEAÑOS');
		}
		if (faltan <=7)
		{
	     $('#divfelicidades').show();}
	    else 
	    {
		  $('#divfelicidades').hide();}
		  
	  
	  {}
	 

		edad=fecha.getFullYear()-yearC;
		if (fechaCA > fechaA)
		{
			edad=edad-1;
			$('#divedad').text('TIENES '+ edad  + ' AÑOS');
		}
		else
		{
		$('#divedad').text('TIENES '+ edad  +  ' AÑOS HOY');
		}
			function redondeo(numero, decimales)
{
var flotante = parseFloat(numero);
var resultado = Math.round(flotante*Math.pow(10,decimales))/Math.pow(10,decimales);
return resultado;
}
      
	 
	 $('#btninicio').click(function(e){
		$('#txtnombre').val('')
		$('#txtdia').val('')
		$('#txtmes').val('')
		$('#txtyear').val('')
		
		
	});

});// click sig fecha

	});//ready

