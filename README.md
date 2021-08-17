# Conversor_de_moedas
Aplicação criada por mim, onde se coloca o tipo de moeda que você quer converter e em seguida visualiza o resultado da conversão na tela.
<h3>Imagem do projeto:</h3>
<img src="https://github.com/sian19/Conversor_de_moedas/blob/master/images/Sem%20t%C3%ADtulo.png">
<p>Neste projeto usei uma API web onde trabalhei no código com os dados da API, onde extrai um objeto com valores como o valor de cotação do dólar, real e euro. Desta forma eu desenvolvi a aplicação onde o usuário digita o valor no campo e em seguida ele seleciona nas duas caixas ao lado o tipo de moeda que será convertido e o tipo que irá retornar. Assim ele consegue visualizar na tela o valor da sua conversão seja ela de real, dólar ou euro.</p>
</br>
<h3>Oque foi usado no desenvolvimento da aplicação:</h3>
<ul>
  <li>Função fetch, que é também usada para trabalhar com dados externos, que no caso do projeto foi a API web.</li>
  <li>O uso de promise foi indispensável, pois a função fetch retorna uma promise onde então dentro de uma arrow function você trabalha o argumento que foi retornado.</li>
  <li>Manipulei o objeto com os dados retornados da API, onde eu adicionei uma nova propriedade com um valor do custo de um dólar para o euro e uma outra propriedade com valor do custo de um euro para o dólar, para desta forma conseguir converter euro para dólar e dólar para euro.</li>
  <li>Por fim criei uma função que recebe como argumento o valor digitado pelo usuário, o tipo de moeda que ele escolheu para converter e o tipo de moeda no qual será convertido. Esta função retorna a conversão de todos esses argumentos e exibe na tela o resultado final da conversão.</li>
</ul>

<h3>Link do projeto:</h3>
<a href="https://conversordemoedas12.netlify.app/">Clique aqui</a>
