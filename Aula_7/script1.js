let a, b, c, d; // Declara quatro variáveis: a, b, c e d, sem inicializá-las.
let saida = document.getElementById("saida"); // Seleciona o elemento HTML com ID "saida" e o atribui à variável saida.
a = 10; // Atribui o valor 10 à variável a.
b = 2; // Atribui o valor 2 à variável b.
a += b; // Adiciona b a a (a = a + b), agora a é 12.
b -= 5; // Subtrai 5 de b (b = b - 5), agora b é -3.
saida.innerHTML = "a = " + a; // Atualiza o conteúdo HTML para mostrar o valor de a.
saida.innerHTML += "<br>b = " + b; // Adiciona o valor de b ao conteúdo HTML.
c = 11; // Atribui o valor 11 à variável c.
d = 6; // Atribui o valor 6 à variável d.
c %= d; // Calcula o resto da divisão de c por d (c = c % d), agora c é 5.
d += a; // Adiciona o valor de a a d (d = d + a), agora d é 18.
saida.innerHTML += "<br>c = " + c; // Adiciona o valor de c ao conteúdo HTML.
saida.innerHTML += "<br>d = " + d; // Adiciona o valor de d ao conteúdo HTML.
