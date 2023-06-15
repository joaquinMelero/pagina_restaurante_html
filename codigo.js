//código js para mostrar imagenes en una galeria desde un fichero


let titulo = document.getElementById("titulo");



//creo un array con tdoas las imagenes de la carpeta
let textos = ['"Maravilloso! La comida espectacular no sabría decir con que plato me quedaba, los entrantes y \n\
primeros increíbles, los postres muy ricos pero nada que ver con el resto. Se podría pasar sin \n\
ellos. El trato exquisito! Todos muy amables y atentos sin agobios. Sensación de estar como en \n\
casa, no te echan si te quieres tomar una copa, simplemente te mueve. A otro lugar."', 
  
  '"Yepaaaa! La comida espectacular no sabría decir con que plato me quedaba, los entrantes y \n\
primeros increíbles, los postres muy ricos pero nada que ver con el resto. Se podría pasar sin \n\
ellos. El trato exquisito! Todos muy amables y atentos sin agobios. Sensación de estar como en \n\
casa, no te echan si te quieres tomar una copa, simplemente te mueve. A otro lugar."'];

//casa 2 segundos una reseña

titulo.innerHTML= textos[1];

let texto = 0; 

    setInterval(function () {

   
        titulo.innerHTML = textos[texto]; //muestro el titulo 
        
        texto++;
        
        if(texto === textos.length){
            texto = 0;
        }

    }, 2000);// pasan 2 segundos
    



