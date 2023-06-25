
const form = document.querySelector("#form")
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const publishingCompanyInput = document.querySelector("#publishingCompany");
const publicationDateInput = document.querySelector("#publicationDate");
const genderInput = document.querySelector("#gender");
const synopsisInput = document.querySelector("#Synopsis");
//const btn = document.querySelector("#btn");


    const books = [];

   form.addEventListener("submit", (event) =>{
       event.preventDefault();
       saveBook(); 
    })

    function saveBook() {

        const book = {
            title: titleInput.value,
            author: authorInput.value,
            publishingCompany: publishingCompanyInput.value,
            publicationDate: publicationDateInput.value,
            gender: genderInput.value,
            synopsis: synopsisInput.value        
        }

        localStorage.setItem("books", JSON.stringify(book))

    }


