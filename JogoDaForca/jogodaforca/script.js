var biblioteca = ['Baleia','Cachorro','Cavalo','Cobra','Crocodilo','Elefante','Galinha','Gambá','Gato','Golfinho',
'Leão','Girafa','Lobo','Macaco','Ovelha','Papagaio','Polvo','Pombo','Rinoceronte','Tartaruga','Touro','Urso','Vaca',
'França','Alemanha','Suíça','Suécia','Índia','Afeganistão','Japão','Austrália','Argentina',
'Abacate','Abacaxi','açaí','Acerola','Amora','Banana','Carambola','Cereja','Goiaba','Jabuticaba','Jaca','Laranja']

var qtde = biblioteca.length - 1  //conta quantidade de palavras exixtente no array
var pos = Math.round(Math.random()*qtde) // sorteia uma posição dentro do vetor
var palavra = biblioteca[pos] //pega uma palavra dentro do vetor sorteada 
var tam = palavra.length //verifica o tamanho da palavra sorteada
var cxLetras = [] 
var acertos, jog
var errosMax = 7
var erros = 0
var desenhos = []
var acertou = false
var jogando = false

function defineLetras(l) {
    var obj
    for(var i = 0; i<20; i++){
        obj = document.getElementById('letra' + i).value = ""
        obj = document.getElementById('letra' + i).style.display = 'none'
    }
    for(var i=0; i<l;i++){
        obj = document.getElementById('letra' + i).style.display = 'inline-block'
    }
}

function jogar(){
    jog = document.getElementById('letraJ')
    jog.focus()
    if(jog.value == ''){
        alert('Digite uma letra')
    }else {
        if(jogando){
            var obj
            var letraTmp, letra, pesq
            letra = jog.value
            jog.value = ''
            acertou = false
            pesq = palavra.match(letra)
            
            while (pesq != null) {
                letraTmp = palavra.search(letra)
                obj = document.getElementById('letra' + letraTmp).value = letra
                palavra = palavra.replace(letra, '0')
                acertos ++
                pesq = palavra.match(letra)
                acertou = true
            }
            if(!acertou){
               document.getElementById('dvletrasdigitadas').innerHTML += letra.toUpperCase()
               erros ++
               if(erros<7){
                   desenhos[erros].style.display = 'block'
               }else{
                   document.getElementById('pernaD').src = 'imgs/s6.png'
                   document.getElementById('dvmsg').innerHTML = 'VOCÊ PERDEU'
                   jogando = false
               }
               if(acertos == tam){
                document.getElementById('dvmsg').innerHTML = ''
                document.getElementById('dvmsg').innerHTML = 'VOCÊ GANHOU'
                jogando = false
               }
            }
        }
    }
}

function inicia(){
    jogando = true
    jog = document.getElementById('letraJ')
    jog.value = ''
    jog.focus()
    acertos = 0
    erros = 0
    acertou = false
    document.getElementById('dvletrasdigitadas').innerHTML = 'Letras Digitadas: '
    pos = Math.round(Math.random()*qtde)
    palavra = biblioteca[pos]
    tam = palavra.length
    defineLetras(tam)
    document.getElementById('dvmsg').innerHTML = ''
   // desenhos[1] = document.getElementById('inicio')
    desenhos[1] = document.getElementById('cabeca')
    desenhos[2] = document.getElementById('corpo')
    desenhos[3] = document.getElementById('bracoE')
    desenhos[4] = document.getElementById('bracoD')
    desenhos[5] = document.getElementById('pernaE')
    desenhos[6] = document.getElementById('pernaD')
    document.getElementById('inicio').src = 'imgs/s0.png'
    for(var i = 1;i<7; i++){
        desenhos[i].style.display = 'none' //esconde todas as peças
    }
}
function dica(){
    alert(palavra)
    jog.focus()
}
addEventListener('load', inicia)














































































































































































































































































































































/*var animais = ['Baleia','Cachorro','Cavalo','Cobra','Crocodilo','Elefante','Galinha','Gambá','Gato','Golfinho','Leão','Girafa',
'Lobo','Macaco','Ovelha','Papagaio','Polvo','Pombo','Rinoceronte','Tartaruga','Touro','Urso','Vaca'];
var paises = ['França','Alemanha','Suíça','Suécia','Índia','Afeganistão','Japão','Austrália','Argentina'];
var frutas = ['Abacate','Abacaxi','açaí','Acerola','Amora','Banana','Carambola','Cereja','Goiaba','Jabuticaba','Jaca','Laranja'];
var opcao = [];
var dv;
var sort = [];
var tipo = ['Animal','País','Fruta'];
//situações do jogador
var imgAtual;
var acertou = '';

var errou = '';

var perdeu = false;
//o objeto a ser divinhado
var obj;
//Usado nas letras
var lt;
var ltPre;
var ltC;
//textos do parágrafo
var completo = false;
var vetPar = [];
//letra para comparação
var compar;
//Boneco Atual
var bonAtual = 0;
var tmp;
opcao.push(animais);
opcao.push(paises);
opcao.push(frutas);
sort[0] = parseInt((Math.random()*opcao.length));
sort[1] = parseInt(Math.random()*opcao[sort[0]].length);

obj = opcao[sort[0]][sort[1]];

function mudaBon(riscar){
  if(riscar == 1){
    ++bonAtual;
    document.getElementById('boneco').src = 's'+bonAtual+'.png';
    imgAtual = bonAtual;
  }
  if(bonAtual == 6){
    removeEventListener('keydown',letra);
    alert('Infelizmente você perdeu!\nA resposta certa é \"'+obj);
  }
}

function verLetra(ltPre){
  var ltPre2;//letra da tecla clicada
  var verOk = false;// se estiver true, muda boneco

  for(var c=0;c<obj.length;c++){

    compar = obj.substr(c,1);
    ltPre2 = limpaLetra(compar);//verifica cada letra da palavra escolhida

    if(ltPre == ltPre2){
      document.getElementById('l'+c).innerHTML = obj.substr(c,1).toString();
      verOk = true;
      acertou += ltPre;

    }
  }

  var testar = [];
  for(var i=0;i<obj.length;i++){
    if(document.getElementById('l'+i).innerHTML == '_'){
      testar[i] = 1;
    } else{
      testar[i] = 0;
    }
  }

  if(verOk == false){
    errou += ltPre;
    mudaBon(1);
  }
  document.getElementById('erros').innerHTML = errou;
  verGanhou(testar);
}

function verGanhou(tes){

  completo = true;
  for(var tl = 0;tl<50;tl++){

    if(tes[tl] == 1)
    completo = false;
  }

  if(completo){
    alert('Você ganhou!\nMeus Parabéns!');
    removeEventListener('keydown',letra);
  }
}
//Deixa a letra minúscula e valida

function limpaLetra(lt){
  lt = lt.toLowerCase();

  if(lt == 'a' || lt == 'b' || lt == 'c' || lt == 'd' || lt == 'e' || lt == 'f' || lt == 'g' || lt == 'h' || lt == 'i' ||
    lt == 'j' || lt == 'k' || lt == 'l' || lt == 'm' || lt == 'n' || lt == 'o' || lt == 'p' || lt == 'q' || lt == 'r' ||
    lt == 's' || lt == 't' || lt == 'u' || lt == 'v' || lt == 'x' || lt == 'w' || lt == 'y' || lt == 'z'){
    ltC = lt;
  }else if(lt == 'á' || lt == 'à' || lt == 'ã' || lt == 'â'){
    ltC = 'a';
  }else if(lt == 'é' || lt == 'è' || lt == 'ê'){
    ltC = 'e';
  }else if(lt == 'í' || lt == 'ì'){
    ltC = 'i';
  }else if(lt == 'ó' || lt == 'ò' || lt == 'ô' || lt == 'õ'){
    ltC = 'o';
  }else if(lt == 'ú' || lt == 'ù'){
    ltC = 'u';
  } else if (lt == 'ç'){
    ltC = 'c';
  }


  return ltC;
}
//detecta as letras e manda

function letra(tecla) {
  //alert(tecla);
  var ltPCode;
  var acertouAq; // pesquisar se true letras que acertou
  var errouAq; // pesquisar letras que errou

  key = tecla;
  lt = String.fromCharCode(key).toLowerCase();
  ltPCode = lt.charCodeAt(0);

  acertouAq = acertou.indexOf(lt);
  errouAq = errou.indexOf(lt);

  if(key == 186){
    alert('Clique C ou outra consoante!');
  }else if(ltPCode == 97 || ltPCode == 98 || ltPCode == 99 || ltPCode == 100 || ltPCode == 101 || ltPCode == 102 || ltPCode == 103 || ltPCode == 104 || ltPCode == 105 ||
    ltPCode == 106 || ltPCode == 107 || ltPCode == 108 || ltPCode == 109 || ltPCode == 110 || ltPCode == 111 || ltPCode == 112 || ltPCode == 113 || ltPCode == 114 ||
    ltPCode == 115 || ltPCode == 116 || ltPCode == 117 || ltPCode == 118 || ltPCode == 119 || ltPCode == 120 || ltPCode == 121 || ltPCode == 122){

    if(acertou.length >= obj.length || imgAtual >= 6){

    }else if(perdeu == true) {

    }else if(acertouAq >= 0 || errouAq >= 0){
      alert('Você já tinha digitado a tecla \"'+lt+'\"');
    }else{
    ltPre = limpaLetra(lt);
    verLetra(ltPre);
    }

  }
}

function clicou(elemento) {
  var tecla = elemento.value.charCodeAt(0);
  letra(tecla);
  elemento.value = '';
}

function ler() {
  document.getElementById('tipo').innerText = tipo[sort[0]];

  dv = document.getElementById('dvFrase');
  for (var l = 0; l < obj.length; l++) {
    dv.innerHTML += '<p id="l' + l + '" class="frase">_</p>';
  }

  var cmpTxt = document.getElementById('cmpTxt');
  document.addEventListener('keydown',function(event){
    cmpTxt.focus();
  });

}
window.addEventListener('load',ler);*/