var currentRecordIndex = 0;
// Checa se o localStorage é suportado
if (typeof(Storage) !== "undefined") {
    // Carrega os dados da localStorage, ou inicializa um objeto vazio
    var books = JSON.parse(localStorage.getItem("books")) || {};
  
    // Seta o índice inicial como 0
    // var currentRecordIndex = 0;
  
    // Mostra o registro selecionado nas tags <li>
    function displayRecord() {
      var book = books[currentRecordIndex];
  
      if (book) {
        var list = document.getElementById("bookList");
        list.innerHTML = "";
  
        for (var key in book) {
          var listItem = document.createElement("li");
          listItem.textContent = key + ": " + book[key];
          list.appendChild(listItem);
        }
      }
    }
  
    // Navega para o registro anterior
    function previousRecord() {
      if (currentRecordIndex > 0) {
        currentRecordIndex--;
        displayRecord();
      }
    }
  
    // Navega para o proximo registro
    function nextRecord() {
      if (currentRecordIndex < Object.keys(books).length - 1) {
        currentRecordIndex++;
        displayRecord();
      }
    }
  
    // Adiciona event listeners aos botoes de navegacao
    document.getElementById("prev").addEventListener("click", previousRecord);
    document.getElementById("next").addEventListener("click", nextRecord);
  
    // Mostra o registro inicial
    displayRecord();

  } else {
    console.log("localStorage is not supported in this browser.");
}
  
function updateRecord() {
   
    var books = JSON.parse(localStorage.getItem("books")) || {};
    var item = books[currentRecordIndex];
    console.log(item);

    var list = document.getElementById("list");
    var status = document.getElementById("status");
    var uname = document.getElementById("uname");
    var ranks = document.querySelector('input[name="rate"]:checked');
    var notes = document.querySelector('#notes')

    var item2 = {...item, 
        Lista: list.value, 
        Status: status.value, 
        Paginas: uname.value,
        Graduação: ranks.value,
        Comentarios: notes.value
    };

    books[currentRecordIndex] = item2;
    console.log(books);
    localStorage.setItem('books', JSON.stringify(books));
}

document.getElementById("saveBtn").addEventListener("click", updateRecord);


function addOptions() {
  var x= document.getElementById("list");
  var newList = document.getElementById('newOption')
  var option= new Option(newList.value);
  x.appendChild(option);
}


//Pega o quadro vermelho
// var mybooks = document.getElementById("booksEntry");

//para cada elemento....
// var linha1 = document.createElement("p");
// linha1.textContent = JSON.parse(localStorage.getItem(meusLivros[0]));
// mybooks.push(linha1);




{/* <script>
            //Obtém os dados do localStorage
            const titulo = localStorage.getItem("titulo");
            const categoriaPrincipal = localStorage.getItem("categoriaPrincipal");

   // Verifica se a chave do localStorage está vazia
           if (!titulo) {
            const tituloPadrao = "Undon Culinaria Japonesa";
                document.getElementById("elementoTitulo").textContent = tituloPadrao;
            } 
            
            if (!categoriaPrincipal) {
                const categoriaPrincipalPadrao = "Delivery"
                document.getElementById("categoriaPrincipal").textContent = categoriaPrincipalPadrao;
              
            } 

if (titulo && categoriaPrincipal) {
                // Exibe os dados na página
                  document.getElementById("elementoTitulo").textContent = titulo;
                  document.getElementById("categoriaPrincipal").textContent = categoriaPrincipal;

}

</script> */}

