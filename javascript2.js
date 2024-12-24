const primerpantalla = document.getElementById('primerpantalla');
const input = document.getElementById('controlrebelde');
const btncp = document.getElementById('btncp');
const resultadoNegativo = document.getElementById('resultadoNegativo');
const reiniciar = document.getElementById('reiniciar');
const parrafoFelicidades= document.getElementById('parrafoFelicidades');


document.addEventListener('click',()=>{
    input.focus();
})

var palabras = ["bueno","busca","cebra","caset","paseo","campo","caldo","cines","comas",
    "coste","diosa","dejar","elfos","falte","gatos","gomas","gordi","grito","ideas","julio","menos","metro",
    "monte","manos","obras","otras"
]



letras = ["_","_","_","_","_"];
letrasHechas =letras.join(" ");
primerpantalla.value = letrasHechas;




palabrasAleatorias = Math.floor(Math.random()*palabras.length);


cantidad = 25;





palabraElegida = palabras[palabrasAleatorias];
btncp.addEventListener("click",()=>{
    
 console.log(palabraElegida)

    if(input.value = input.value.toUpperCase()){
        palabraElegida = palabraElegida.toUpperCase();
    }
    
      
    
     if(input.value.match(/\d+/g)){
        parrafoFelicidades.innerHTML = " 👀Los numeros NO<br> son bienvenidos aquí";
        parrafoFelicidades.style.color = "red"
     }
    
    if(input.value !== "" && !primerpantalla.value.includes(input.value) 
        && cantidad !== 0 && primerpantalla.value.includes("_")&& !input.value.match(/\d+/g)){
        
    
        parrafoFelicidades.value = cantidad--;
       parrafoFelicidades.innerHTML = `Quedan <b>${cantidad}</b> intentos `;
       parrafoFelicidades.style.fontSize = '15px'
       parrafoFelicidades.style.color = "#fff"
    }
   
    if(palabraElegida.includes(input.value) && input.value !== "" && cantidad !== 0  && !input.value.match(/\d+/g)){
     posicion = palabraElegida.indexOf(input.value);
     letraVieja = letras[posicion];
     letras.splice(posicion,1,input.value);
     console.log(palabraElegida);
     letrasNuevas = letras.join(" ");
     primerpantalla.value = letrasNuevas;
     if(!letrasNuevas.includes('_')){
        parrafoFelicidades.innerHTML = `<b>Felicidades haz logrado adivinar la palabra 😎<b>`;
        parrafoFelicidades.style.color ='rgb(9, 142, 26)';
     }
    }

   else{
        if(primerpantalla.value.includes("_") && input.value !== "" && cantidad !== -1 && !input.value.match(/\d+/g) ){
            resultadoNegativo.value += input.value.toUpperCase()+' ';
        }

        if(cantidad == 0){
            parrafoFelicidades.innerHTML = `<br>No te quedan intentos😵<br><b>Game over</b>`;
            parrafoFelicidades.style.color = 'red';
            parrafoFelicidades.style.marginTop = '-70px';
            parrafoFelicidades.style.paddingBottom = '20px'
        }
       
   }


     input.value = ""
})

reiniciar.addEventListener("click",()=>{
    location.reload()
})



