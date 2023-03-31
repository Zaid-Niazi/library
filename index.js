
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
      bookList.innerHTML = '' //This ensures that at next go, we do not get multiple headers.
      const tableHead = document.createElement('tr')

       tableHead.innerHTML=`<th>Title</th> 
       <th>Author</th> 
       <th>Pages</th> 
       <th>Read</th>
       <th>Remove</th>`



      bookList.appendChild(tableHead)
     
      for (let i = 0; i < myLibrary.length; i++) {
        const tableRows = document.createElement('tr')


        tableRows.innerHTML = ` 
        <td>${myLibrary[i].name}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].read}</td>
        <td><button data-index='${i}'>Remove</button></td>`;

        const removeButton = tableRows.querySelector('button')
       

        bookList.appendChild(tableRows)

        function removeTd(){
          const index = this.dataset.index;
  myLibrary.splice(index, 1); // Remove the corresponding item from the array
  this.parentNode.parentNode.remove(); // Remove the corresponding row from the table
  loop();
        
        } 



        removeButton.addEventListener('click', removeTd)

        
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