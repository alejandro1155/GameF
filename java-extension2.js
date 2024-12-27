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
    indice++;  

    

    boton.addEventListener('click',()=>{

        if(boton == posicionElegida1){
           
        for(boton of botones){
            boton.style.backgroundColor ='green';
             boton.innerHTML= '💎';
             posicionElegida1.textContent ='💣';
             posicionElegida1.style.backgroundColor='red';
             mensaje.style.display ='flex';
             mensaje.innerHTML ='Haz fallado esta vez';
             mensaje.style.backgroundColor= 'red';
            setTimeout(()=>{mensaje.style.display ='none'; },3000);
                   
        }}
     
     if(boton !== posicionElegida1 && aciertos <=17 && boton.style.backgroundColor !== 'green'){
        boton.style.backgroundColor ='green';
         boton.innerHTML= '💎';
         aciertos++;
         console.log(aciertos);

     }
     if (aciertos ==17){
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



