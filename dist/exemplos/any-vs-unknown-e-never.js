"use strict";
var valor; // unknown eh um tipo que pode receber qualquer valor
valor = 5;
valor = 'Max';
var nome;
// nome = valor; Isso nao vai funcionar. O tipo unknown nao pode ser arbitrariamente atribuido
if (typeof valor === 'string') {
    nome = valor; // Isso funciona. Esse tipo só pode ser atribuido se uma validação for feita
}
var valorAny; // Como ja foi visto, o any tambem recebe qualquer valor
valorAny = true;
valorAny = 10;
nome = valorAny; // O perigo e que o any pode ser atribuido a qualquer variavel tipada sem que seu tipo seja verificado
// Nao eh uma pratica ruim usar unknown, ja que ele forca uma validação de tipos. Diferente do any, que como já vimos pode ser usado sem se preocupar com tipage.
function geradorDeErro(mensagem, codigoDeErro) {
    throw { message: mensagem, errorCode: codigoDeErro }; // Nesse caso ele foi interrompido
}
geradorDeErro('Um erro ocorreu!', 500); // O mesmo tipo poderia ser usado se fosse usado um while loop que nunca é finalizado
//# sourceMappingURL=any-vs-unknown-e-never.js.map