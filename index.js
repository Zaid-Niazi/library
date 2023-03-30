
const myLibrary = [];

function Book(name,author,pages,read){
    this.name=name
    this.author=author
    this.pages=pages
    this.read=read
}

function addToLibrary(name,author,pages,read){
this.newOne= new Book(name,author,pages,read)
myLibrary.push(newOne)
}

function loop() {

    if (myLibrary.length > 0) {
      const bookList = document.getElementById('bookList')
      bookList.innerHTML = ''
      const tableHead = document.createElement('tr')

       tableHead.innerHTML=`<th>Title</th> 
       <th>Author</th> 
       <th>Pages</th> 
       <th>Read</th>`

       bookList.appendChild(tableHead)
     
      for (let i = 0; i < myLibrary.length; i++) {
        const tableRows = document.createElement('tr')
        tableRows.innerHTML = ` 
        <td>${myLibrary[i].name}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].read}</td>`;

        bookList.appendChild(tableRows)
        console.log('looping')
    }
    }
  } 

const newButton = document.getElementById('newButton');
const newBookForm = document.getElementById('newBookForm');
newBookForm.style.display='none';

newButton.addEventListener('click', function(){
    newBookForm.style.display = (newBookForm.style.display === 'none') ? 'block' :'none'  ;
    loop()
})

newBookForm.addEventListener('submit', function(event){
    event.preventDefault();

    const name = event.target.elements.name.value;
    const author = event.target.elements.author.value;
    const pages = event.target.elements.pages.value;
    const read = event.target.elements.read.checked;

    addToLibrary(name,author,pages,read)
loop()
    
})