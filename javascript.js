const transform = document.getElementById('transform');
const botones = document.querySelectorAll('button');
const pantalla = document.querySelector('.pantalla');


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
            transform.innerHTML = `¡Acertaste! El numero es <br><b style = 'margin-left:70%'><span style='font-size:45px'; 'background-color:red;'>${numero}</span></b>`;
            transform.style.color= 'rgb(42, 200, 42)';
            transform.style.transition= 'color 0.8s ease-in-out';
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
            transform.innerHTML = `¡Fallaste! el numero es<br><b style = 'margin-left:70%''><span style='font-size:45px'>${numero}</span></b>`;
            transform.style.color = 'red';
            transform.style.transition= 'color 0.8s ease-in-out';
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





