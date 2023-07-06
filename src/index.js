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

let scifi = document.querySelector('#sci-fi')
let humor = document.querySelector('#humor')
let romance = document.querySelector('#romance')
let crime = document.querySelector('#crime')


let bio = document.querySelector('#bio')
let histor = document.querySelector('#histor')
let selfhelp= document.querySelector('#selfhelp')
let Arts = document.querySelector('#Arts')

let newReleases = document.querySelector('#new-releases')
let bestRated = document.querySelector('#best-rated')
let supriseMe = document.querySelector('#suprise-me')

fantasy.addEventListener('click', e => {
     handleGenres(e.target.innerText)


  })

scifi.addEventListener('click', e => {
    handleGenres(e.target.innerText)


 })
 
humor.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})

romance.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})


crime.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})

bio.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})

histor.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})

selfhelp.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})

Arts.addEventListener('click', e => {
  handleGenres(e.target.innerText)


})


newReleases.addEventListener('click',() =>{
  renderNewReleases()
})
bestRated.addEventListener('click',() =>{
  renderBestRated()
})
supriseMe.addEventListener('click',() => {
  renderSupriseMe()
})









function handleGenres(genre){
  let buug =[]
  //  let genrenavbar = document.querySelector('#books-seection-navbar')
  // genrenavbar.innerHTML = ` `
  // genrenavbar.innerHTML =` 

                
                // <nav class="genre-navbar">
                //    <button id="new-releases">New Releases</button>
                //    <button id="best-rated">Best Rated</button>
                //    <button id="suprise-me">Suprise Me!</button>
                // </nav>
  
  // `
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
    buug.sort(function(b, a){
              var keyA =  a.want_to_read_count ,
                  keyB =  b.want_to_read_count ;
              // Compare the 2 dates
              if(keyA < keyB) return -1;
              if(keyA > keyB) return 1;
              return 0;
            })

      console.log(buug)
      renderNewBooks(buug)
})
}

let firstbooksdiv = document.querySelector('#firstbooksdiv')
let secondbooksdiv = document.querySelector('#secondbooksdiv')

function renderNewBooks(booksArray){
  
  firstbooksdiv.innerHTML = ` `
  secondbooksdiv.innerHTML = ` `
  if(booksArray.length % 2 === 0 ){
    let newBooksArray =[...booksArray]
    let newBooksArray2 = [...newBooksArray]
    let chunk = newBooksArray.length / 2 
    let div1 = newBooksArray.splice(0, chunk)
    let div2 = newBooksArray2.splice(chunk, chunk + newBooksArray2.length)
    console.log(div1)
    console.log(div2)

    div1.forEach(book => {
      cover = getCoverImageUrl(book)
      let bookdiv = document.createElement('div');
      firstbooksdiv.appendChild(bookdiv)
      bookdiv.innerHTML = ` 
                  <div class="bookdiv">
                        <div>
                            <img src="${cover}" alt="" class="img">


                        </div>
                        <div>
                            <p><span style="font-weight: 700;">Title: </span>${book.title}</p>
                            
                            <p> <span style="font-weight: 700;">Author: </span>${book.author_name[0]}</p>


                        </div>
                  </div>
      
      `


      
      
      




    })

    div2.forEach(book => {
      cover = getCoverImageUrl(book)
      let bookdiv = document.createElement('div');
      secondbooksdiv.appendChild(bookdiv)
      bookdiv.innerHTML = ` 
                  <div class="bookdiv">
                        <div>
                            <img src="${cover}" alt="" class="img">


                        </div>
                        <div>
                            <p><span style="font-weight: 700;">Title: </span>${book.title}</p>
                            
                            <p> <span style="font-weight: 700;">Author: </span>${book.author_name[0]}</p>

                        </div>
                  </div>
      
      `


      
      
      




    })

    



  }else{
    let newBooksArray =[...booksArray]
    let newBooksArray2 = [...newBooksArray]
    let chunk = newBooksArray.length / 2 + 1
    let div1 = newBooksArray.splice(0, chunk)
    let div2 = newBooksArray2.splice(chunk, chunk + newBooksArray2.length)
    console.log(div1)
    console.log(div2)

    div1.forEach(book => {
      cover = getCoverImageUrl(book)
      let bookdiv = document.createElement('div');
      firstbooksdiv.appendChild(bookdiv)
      bookdiv.innerHTML = ` 
                  <div class="bookdiv">
                        <div>
                            <img src="${cover}" alt="" class="img">


                        </div>
                        <div>
                            <p><span style="font-weight: 700;">Title: </span>${book.title}</p>
                            
                            <p> <span style="font-weight: 700;">Author: </span>${book.author_name[0]}</p>

                        </div>
                  </div>
      
      `


      
      
      




    })

    div2.forEach(book => {
      cover = getCoverImageUrl(book)
      let bookdiv = document.createElement('div');
      secondbooksdiv.appendChild(bookdiv)
      bookdiv.innerHTML = ` 
                  <div class="bookdiv">
                        <div>
                            <img src="${cover}" alt="" class="img">


                        </div>
                        <div>
                            <p><span style="font-weight: 700;">Title: </span>${book.title}</p>
                            
                            <p> <span style="font-weight: 700;">Author: </span>${book.author_name[0]}</p>

                        </div>
                  </div>
      
      `


      
      
      




    })


  }
  
  

}
//click events for the genrenavbar


newReleases.addEventListener('click',renderNewReleases())
bestRated.addEventListener('click',renderBestRated())
supriseMe.addEventListener('click',renderSupriseMe())

////functions for genre navbar
function renderNewReleases(){

  if (genrename){
    handleGenres(genrename.innerText)
  }

}

function renderBestRated(){

  
  let buug1 =[]
  let baseUrlo = 'http://openlibrary.org';
  let endpoint = '/search.json';

  let language = 'eng'
  let subject2 = `${genrename.innerText}`
  let params2 = new URLSearchParams({
        subject: subject2,
        limit: 50,
  
        language: language,
        first_publish_year: [`2010`]
   });
  
    
    


    
  if (genrename.innerText){
fetch(baseUrlo + endpoint + '?' + params2)
.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error: ' + res.status);
      }
    
    
})
.then(data =>{
  console.log(data)
  data.docs.forEach(book => {
    if (book.cover_i ){
      buug1.push(book)
     
    }
     
  });
  console.log(buug1.length)
    buug1.sort(function(b, a){
              var keyA =  a.want_to_read_count ,
                  keyB =  b.want_to_read_count ;
              // Compare the 2 dates
              if(keyA < keyB) return -1;
              if(keyA > keyB) return 1;
              return 0;
            })

      console.log(buug1)
      renderNewBooks(buug1)

})





  }


  
}

function renderSupriseMe(){
  console.log('hello')
}
function getCoverImageUrl(book){
   const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
   return coverUrl
}