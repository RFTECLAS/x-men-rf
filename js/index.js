const personagens =(document.querySelectorAll('.personagem'));


personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter' , () => {

 const personagemselecionado = document.querySelector('.selecionado');
    personagemselecionado.classList.remove('selecionado')


    personagem.classList.add('selecionado');

//OBJETIVO 2//

 const imagempersonagemgrande = document.querySelector('.personagem-grande');

 const idpersonagem = personagem.attributes.id.value;

 imagempersonagemgrande.src = `./imagens/card-${idpersonagem}.png`;
if(window.innerWidth < 450) {
    window.scrollTo({top: 0, behavior: 'smooth'})
}
//passo 3

const nomepersonagem = document.getElementById('nome-personagem')

nomepersonagem.innerText = personagem.getAttribute('data-nome');

//passo 4

const descricaopersonagem = document.getElementById('descricao-personagem');
descricaopersonagem.innerText = personagem.getAttribute('data-description')

    } )

})
