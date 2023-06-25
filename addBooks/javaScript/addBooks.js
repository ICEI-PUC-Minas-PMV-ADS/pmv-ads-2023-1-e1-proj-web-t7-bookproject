
const form = document.querySelector("#form")
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const publishingCompanyInput = document.querySelector("#publishingCompany");
const publicationDateInput = document.querySelector("#publicationDate");
const genderInput = document.querySelector("#gender");
const synopsisInput = document.querySelector("#synopsis");

let books = JSON.parse(localStorage.getItem("books")) || [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addBook = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    console.log(books);
    let book = {
        Título: titleInput.value,
        Autor: authorInput.value,
        Editora: publishingCompanyInput.value,
        Publicação: publicationDateInput.value,
        Gênero: genderInput.value,
        Sinopse: synopsisInput.value  
    }
    books.push(book);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();
   
    
    //saving to localStorage
    localStorage.setItem('books', JSON.stringify(books) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addBook);
});

const meusLivros = localStorage.getItem(books)

{/* <script>
    document.getElementById("formularioEstabelecimento").addEventListener("submit", function(event){
      event.preventDefault(); //Evita que o formulário seja enviado

      const titulo = document.getElementById("titulo").value;
     const categoriaPrincipal = document.getElementById("categoriaPrincipal").value;

  //Armazena os dados no localStorage
      localStorage.setItem("titulo", titulo);
     localStorage.setItem("categoriaPrincipal", categoriaPrincipal);
})

 //Carrega os dos do localStorage
      const titulo = localStorage.getItem("titulo");
      const categoriaPrincipal = localStorage.getItem("categoriaPrincipal");

 //Verifica se os dados existem no localStorage
      if (titulo || categoriaPrincipal) {
      //Preenche os campos de entrada com os dados salvos
        document.getElementById("titulo").value = titulo;
        document.getElementById("categoriaPrincipal").value = categoriaPrincipal;

}

</script> */}

