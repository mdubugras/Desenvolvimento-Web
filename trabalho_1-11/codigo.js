const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 24;

const preenche = (atleta) => {
    const container = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const descricao = document.createElement('p');

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    descricao.innerHTML = atleta.descricao;

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(descricao);

    document.body.appendChild(container);

}


const pegar_coisas = async   (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

pegar_coisas(`${url}/${numero_jogador}`).then(
    (entrada) => preenche(entrada)

);


console.log('assíncrono');