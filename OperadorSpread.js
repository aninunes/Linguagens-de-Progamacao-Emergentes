const livros = [
    { nome: 'JavaScript: The Good Parts', linguagem: 'Inglês' },
    { nome: 'Eloquent JavaScript', linguagem: 'Inglês' },
    { nome: 'Aprendendo JavaScript', linguagem: 'Português' },
    { nome: 'Node.js in Action', linguagem: 'Inglês' },
    { nome: 'You Don’t Know JS', linguagem: 'Inglês' },
    { nome: 'JavaScript: O Guia Definitivo', linguagem: 'Português' }
];

// Exemplo de acesso aos dados
console.log(livros[0].nome); // Saída: JavaScript: The Good Parts
console.log(livros[0].linguagem); // Saída: Inglês

// Iteração sobre os livros
livros.forEach(livro => {
    console.log(`Nome: ${livro.nome}, Linguagem: ${livro.linguagem}`);
});
