alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute n for igual ao numero secreto
while (chute != numeroSecreto) {
    chute =  prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    }   else {
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que o ${chute}`);
            } else{
                alert(`O número secreto é maior que o ${chute}`);
            }
            //tentativas = tentativas + 1;
            tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas'  : 'tentativas';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);

//if (tentativas > 1){
   // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else{
    //alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

