function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();//.play() função para tocar no javascript
}

const listaSons = document.querySelectorAll('.tecla'); //pegar toda a classe de tecla dos botoes
let contador=0;

while(contador < listaSons.length){
    const nota = listaSons[contador].classList[1]
    let idAudio = `#som_${nota}`; //usei um template String para armazenar a id contida na const nota.
    // essa let vai armazenar toda a lista contida na nota, tomando a cara da id. Torna o texto dinamico.
    listaSons[contador].onclick = function(){
      tocaSom(idAudio);//aqui é só botar a let criada para tocar qualquer nota da lista.
    };

    nota.onkeydown = function(evento){
      console.log(`evento.code`);
      if(evento.code==='Space' || evento.code==='Enter'){
          
        nota.classList.add('ativa');
      }

    }
    nota.onkeyup = function(){
      nota.classList.remove('ativa');
    }
    contador++;
}



//function tocaSomPom(){
  //  document.querySelector('#som_tecla_pom').play();
//}
//function tocaSomClap(){
//    document.querySelector('#som_tecla_clap').play();
//}

//function tocaSomTim(){
//    document.querySelector('#som_tecla_tim').play();
//}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
//document.querySelector('.tecla_clap').onclick = tocaSomClap;
//document.querySelector('.tecla_tim').onclick = tocaSomTim;
//Seria assim para acessar as teclas com sons uma por uma