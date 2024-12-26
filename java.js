const primerpantalla = document.getElementById('primerpantalla');
const btncp = document.getElementById('btncp');
const resultadoNegativo = document.getElementById('resultadoNegativo');
const reiniciar = document.getElementById('reiniciar');

const conteo = document.getElementById('conteo');   
const ventana = document.querySelector(".ventana");
const parrafoVentana = document.getElementById('parrafoVentana');

const tutorial = document.querySelector(".tutorial");
const ultimoBoton = document.querySelector(".ultimoBoton");
const botonClose = document.querySelector('.botonClose');

const papelitos = document.querySelector('.contenedor-1');


tutorial.style.display='none';
papelitos.style.display ='none';

var palabras = ["bueno","busca","cebra","caset","paseo","campo","caldo","cines","comas",
    "coste","diosa","dejar","elfos","falte","gatos","gomas","gordi","grito","ideas","julio","menos","metro",
    "monte","manos","obras","otras"];

var abecedario = ["a","b","c","d","e","f","g","h","i","j","K","L","M","n","o","p","q","r","S","T","u","V","w","y","Z"];
 

letras = ["_","_","_","_","_"];
letrasHechas =letras.join(" ");
primerpantalla.value = letrasHechas;

var letrasDeRN =[];
palabrasAleatorias = Math.floor(Math.random()*palabras.length);
cantidad = 35;
palabraElegida = palabras[palabrasAleatorias];
console.log(palabraElegida);

var i = 1;

reiniciar.setAttribute('id','hola')




btncp.addEventListener('click',()=>{
letrasAleatorias = Math.floor(Math.random()*abecedario.length);
letraElegida = abecedario[letrasAleatorias];
console.log(letraElegida);
    if(letraElegida = letraElegida.toUpperCase()){
        palabraElegida = palabraElegida.toUpperCase();
    }
  
    if(!primerpantalla.value.includes(letraElegida) && cantidad !== 0 && primerpantalla.value.includes("_") ){
        cantidad--;
        conteo.innerHTML = cantidad;
        conteo.style.color = 'red';
        setTimeout(()=>{
            conteo.style.color='black';},200);

        
    }
    
    if(palabraElegida.includes(letraElegida)  && cantidad !== 0 ){
        if(primerpantalla.value.indexOf(letraElegida) == -1){
     ventana.style.display = 'block';
      ventana.style.borderRadius ='14px';
     parrafoVentana.innerHTML = `Encontrada la letra <b>"${letraElegida}"</b>`; 
     ventana.style.backgroundColor = 'green'
   
     
    }
    

     else if(primerpantalla.value.indexOf(letraElegida) !== -1 && letras.includes("_")){
        ventana.style.display ='block'
        
        parrafoVentana.innerHTML = `Volvió a salir "${letraElegida}"<br> Suma 1 chance`;
        ventana.style.backgroundColor =' green'
    
        cantidad++;
        conteo.innerHTML = cantidad;
        conteo.style.color= 'green';

     }
     posicion = palabraElegida.indexOf(letraElegida);
     letraVieja = letras[posicion];
     letras.splice(posicion,1,letraElegida);
     letrasNuevas = letras.join(" ");
     primerpantalla.value = letrasNuevas;
        if(!letrasNuevas.includes('_')){
        titulo = `Lo hemos conseguido, adivinamos😎`;
        papelitos.style.display= 'block';
        reiniciar.setAttribute('id','reiniciar')
        resultadoNegativo.value = titulo;
        resultadoNegativo.style.color='green';
        resultadoNegativo.style.transition='color 0.7s ease-in-out'
     }
    }

   else{
        if(primerpantalla.value.includes("_") && cantidad !== -1){
            letrasDeRN.splice(i,1,letraElegida.toLowerCase())
            
            
              i++;
            nuevapantalla = letrasDeRN.join(" ");
            if(nuevapantalla.length >= 43){
                letrasDeRN.shift()
            }
            ventana.style.display='block';
            resultadoNegativo.value = nuevapantalla;
            parrafoVentana.innerHTML = `Ha salido la letra <span style='color:red'>${letraElegida}</span>`;
            ventana.style.backgroundColor = 'transparent';
            
           
        }

        if(cantidad == 0){
            resultadoNegativo.value =`No lo hemos conseguido😵Game over`;
            reiniciar.setAttribute('id','reiniciar')
            primerpantalla.value = `La palabra era "${palabraElegida}"`;
            primerpantalla.style.color = 'red';
        }
   } 
});


reiniciar.addEventListener("click",()=>{
    location.reload()   
});

ultimoBoton.addEventListener('click',()=>{
    tutorial.style.display = 'flex'
})
botonClose.addEventListener('click',()=>{
    tutorial.style.display = 'none';
})


