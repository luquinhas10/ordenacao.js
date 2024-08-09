const livros = require('./listarLivros')

let MaisBarato = 0;

for (let atual = 0;atual < livros.length; atual++){
    if ( livros[atual].preco < livros[MaisBarato].preco){
        MaisBarato = atual; 
    }
    // console.log(livros[MaisBarato].preco);
};

console.log(`O livro mais barato é: ${livros[MaisBarato].preco} e o título do livro é: ${livros[MaisBarato].titulo}`)
