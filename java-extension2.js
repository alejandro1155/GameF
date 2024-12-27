const botones = document.querySelectorAll('.btn');
const mensaje = document.querySelector('.mensaje');

const botonPlay = document.getElementById('boton-play');




mensaje.style.display ='none';
var indice = 0;
var posiciones = [];
var aciertos = 0;

 generarNumero = ()=>{
     numeroAleatorio = Math.floor(Math.random()*botones.length+1);
     return numeroAleatorio;
 }



for(let boton of botones){
    
    posiciones.splice(indice,1,boton);
    posicionElegida1 = posiciones[generarNumero()];
    for(let i =0; i<300; i++){
    if(posicionElegida1 == undefined){
        posicionElegida1 = posiciones[generarNumero()];
    }
    else{break;}
        }
    indice++;  

    

    boton.addEventListener('click',()=>{

        if(boton == posicionElegida1){
           
        for(boton of botones){
             posicionElegida1.textContent ='💣';
             posicionElegida1.style.backgroundColor='red';
             mensaje.style.display ='flex';
             mensaje.innerHTML ='Haz fallado esta vez';
             mensaje.style.backgroundColor= 'red';
            setTimeout(()=>{mensaje.style.display ='none'; },3000);    
              boton.removeAttribute('class')
        }
        
    }
        
     
     if(boton !== posicionElegida1 && aciertos <=12 && boton.getAttribute('class') ){
        boton.style.backgroundColor ='green';
         boton.innerHTML= '💎';
         aciertos++;
         console.log(aciertos);

     }
     if (aciertos == 12){
        posicionElegida1.textContent ='💣';
        posicionElegida1.style.backgroundColor='yellow';
        mensaje.style.display ='flex';
        mensaje.innerHTML ='Lo haz logrado'
        mensaje.style.backgroundColor= 'green'
            setTimeout(()=>{mensaje.style.display ='none'; },3000);
        

     }
    
        console.log(posicionElegida1);
        console.log(posiciones);    

    })
}

   
botonPlay.addEventListener('click',()=>{
    location.reload();
})



