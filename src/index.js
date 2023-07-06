let baseUrlo = 'http://openlibrary.org';
let endpoint = '/search.json';
; // Filter books with subject 'Fiction'
let limit = 50; // Number of books to fetch
let language = 'eng'
let minReadCount = 2


// let params = new URLSearchParams({
//   subject: subject,
//   limit: limit,
//   sort: '',
//   language: language,
//   first_publish_year: [`2010`]
// });


let fantasy = document.querySelector('#fantasy')

fantasy.addEventListener('click', e => {
     handleGenres(e.target.innerText)


  })










function handleGenres(genre){
  let buug =[]
   let genrenavbar = document.querySelector('#books-seection-navbar')
  genrenavbar.innerHTML = ` `
  genrenavbar.innerHTML =` 
                <nav class="genre-navbar">
                   <button id="new-releases">New Releases</button>
                   <button id="best-rated">Best Rated</button>
                   <button id="suprise-me">Suprise Me!</button>
                </nav>
  
  `
let subject = `${genre}`
let genrename =document.querySelector('#genrename')
 genrename.innerHTML =`${genre}`

let params = new URLSearchParams({
  subject: subject,
  limit: 400,
  
  language: language,
  first_publish_year: [`2023`]
});
  

fetch(baseUrlo + endpoint + '?' + params)
.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error: ' + res.status);
      }
    
    
})
.then(data => {
  
  data.docs.forEach(book => {
    if (book.cover_i ){
      buug.push(book)
     
    }
     
  });
  console.log(buug.length)
      console.log(buug)
      renderNewBooks(buug)
})
 
// let newReleases = document.querySelector('#new-releases')
// let bestRated = document.querySelector('#best-rated')
// let supriseMe = document.querySelector('#suprise-me')

// newReleases.addEventListener('click',renderNewBooks(buug))
// bestRated.addEventListener('click',renderBestRated(genre))
// supriseMe.addEventListener('click',renderSupriseMe(genre))
}



function renderNewBooks(booksArray){
  let booksSection = document.querySelector('#books-section')
  booksSection.innerHTML = ` `
  if(booksArray.length % 2 === 0 ){
    let newBooksArray =[...booksArray]
    let newBooksArray2 = [...newBooksArray]
    let chunk = newBooksArray.length / 2 
    let div1 = newBooksArray.splice(0, chunk)
    let div2 = newBooksArray2.splice(chunk, chunk + newBooksArray2.length)
    console.log(div1)
    console.log(div2)

    div1.forEach(book => {
      
    })



  }else{
    let newBooksArray =[...booksArray]
    let newBooksArray2 = [...newBooksArray]
    let chunk = newBooksArray.length / 2 + 1
    let div1 = newBooksArray.splice(0, chunk)
    let div2 = newBooksArray2.splice(chunk, chunk + newBooksArray2.length)
    console.log(div1)
    console.log(div2)
  }
  
  

}

function renderBestRated(genre){
  console.log('hello')
}

function renderSupriseMe(genre){
  console.log('hello')
}