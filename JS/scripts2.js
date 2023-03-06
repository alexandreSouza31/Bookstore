; (function () {
    let id = document.querySelector(".id");
    let nome = document.querySelector(".nome");
    let autor = document.querySelector(".autor");
    let ano = document.querySelector(".ano");
    let isbn = document.querySelector(".isbn");
    let data = document.querySelector(".data_cadastro");
    let tema = document.querySelector(".tema");
    let obs = document.querySelector(".obs");
    let verLivros = document.querySelector(".ver_livros");
    let add = document.querySelector(".add");
    let formCadastro = document.querySelector(".formCadastro");
    
    function validaCampos() {
        if (nome.value === "") {
            alert("o nome do livro não pode ser vazio");
            return false;
        }
        if (autor.value === "") {
            alert("o nome do autor não pode ser vazio");
            return false;
        }
        if (ano.value === "") {
            alert("o ano do livro não pode ser vazio");
            return false;
        }
        if (isbn.value === "") {
            alert("o isbn do livro não pode ser vazio");
            return false;
        }
        if (data.value === "") {
            alert("a data de cadastro não pode ser vazia");
            return false;
        }
        if (tema.value === "") {
            alert("o tema do livro não pode ser vazio");
            return false;
        }
            return true;
    }

    formCadastro.addEventListener("submit", function (e) {
        e.preventDefault();
    });
    
})()