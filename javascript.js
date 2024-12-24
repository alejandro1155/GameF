const transform = document.getElementById('transform');
const botones = document.querySelectorAll('button');
const pantalla = document.querySelector('.pantalla');
const circulo = document.querySelector('.circulo');

var increment = 0;
 var stats = [];
generarNumero = ()=>{
    numero = Math.floor(Math.random()*10);
    return numero
}







for(let boton of botones){
  

    boton.addEventListener("click",()=>{
         let numero = generarNumero();
     
        
       
        
        if(numero == boton.value){
            transform.innerHTML = `¡Haz Ganado! El numero es <br><b style = 'margin-left:70%'><span style='font-size:25px'>(${numero})</span></b>`;
            transform.style.color= 'green';
            circulo.style.color = 'green';
            
           if(pantalla.value.length < 80 && stats.length <= 20){
            stats.splice(increment,1,numero);
             let estadistica = stats.join("  ");
            pantalla.value = estadistica;

        }   
            if(pantalla.value.length >= 39){
               stats.shift(); 
        }
           
        

        }

        else if(numero !== boton.value  ) {
            transform.innerHTML = `¡Fallaste! el numero es<br><b style = 'margin-left:70%''><span style='font-size:25px'>(${numero})</span></b>`;
            transform.style.color = 'red';
            circulo.style.color = 'red';
            
            
            
            if(pantalla.value.length < 80 && numero !== boton.value && stats.length <=20){
            stats.splice(increment,1,numero);
            let estadistica = stats.join("  ");
            pantalla.value = estadistica;
         }
            if(pantalla.value.length >= 39){
                stats.shift()
            }
        
        }

        if(stats.length <20){ increment++;}
          
    })

      
   
    
 
}





