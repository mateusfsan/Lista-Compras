import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
})


verificarListaVazia(listaDeCompras);





















//teste para manipular valor na tag 
const h1 = document.querySelector('h1');
    
    h1.innerHTML = "Olá mundo";




































/* exemplo de funcionalidade
<button id="meuBotao">Clique aqui!</button>

<script>
  document.getElementById('meuBotao').addEventListener('click', function(event) {
    alert("Botão clicado!");
    console.log(event.type); // Mostra o tipo do evento no console, que será "click"
    console.log(event.target); // Mostra o elemento que disparou o evento, que será o botão
  });
</script> */

