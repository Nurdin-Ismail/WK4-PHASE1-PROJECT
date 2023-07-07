

document.addEventListener('DOMContentLoaded', () => {
  
  
  ////URl INFO
let baseUrlo = 'https://openlibrary.org';
let endpoint = '/search.json';
; // Filter books with subject 'Fiction'
let limit = 50; // Number of books to fetch
let language = 'eng'
let minReadCount = 200


////SIdebar Selectors
let home = document.querySelector("#home")

let fantasy = document.querySelector('#fantasy')

let scifi = document.querySelector('#sci-fi')
let humor = document.querySelector('#humor')
let romance = document.querySelector('#romance')
let crime = document.querySelector('#crime')


let bio = document.querySelector('#bio')
let histor = document.querySelector('#histor')
let selfhelp= document.querySelector('#selfhelp')
let Arts = document.querySelector('#Arts')
  ////genre-navbar buttons selectors
let newReleases = document.querySelector('#new-releases')
let bestRated = document.querySelector('#best-rated')
let supriseMe = document.querySelector('#suprise-me')

let imag = document.querySelector('#pick')

let genrename =document.querySelector('#genrename')
 //// selectors for the divs where the books will be placed
let firstbooksdiv = document.querySelector('#firstbooksdiv')
let secondbooksdiv = document.querySelector('#secondbooksdiv')

////genre navbar is to be hidden unless displayed after clicking a genre button
supriseMe.className = "hidden"
newReleases.className = "hidden"
bestRated.className = "hidden"



////Adding the loading feature:
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 30000);
}
///hides loader
function hideLoading() {
  loader.classList.remove("display");
}





////Home button - adds the .hidden class to the genre-navbar/buttons and clears previous content when pressed

home.addEventListener('click', () => {
  supriseMe.className = "hidden"
  newReleases.className = "hidden"
  bestRated.className = "hidden"
  imag.className = ''
  genrename.innerHTML = "Pick a Genre"
  firstbooksdiv.innerHTML = ''
  secondbooksdiv.innerHTML = ''

  // renderHome()
  
}
)


///Event listners for all the buttons
fantasy.addEventListener('click', e => {
 imag.className = "hidden"
  newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 
 handleGenres(e.target.innerText)



 })

scifi.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
   handleGenres(e.target.innerText)


})

humor.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 handleGenres(e.target.innerText)


})

romance.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 handleGenres(e.target.innerText)


})


crime.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 handleGenres(e.target.innerText)


})

bio.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 handleGenres(e.target.innerText)


})

histor.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 handleGenres(e.target.innerText)


})

selfhelp.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
 handleGenres(e.target.innerText)


})

Arts.addEventListener('click', e => {
 imag.className = "hidden"

 newReleases.classList.remove('hidden')
 bestRated.classList.remove('hidden')
 supriseMe.classList.remove('hidden')
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







///function to handle,filter and sort the data

function handleGenres(genre){
  //initializing the array where the books will be placed
  let buug =[]
 
  




  ////fetch request
let subject = `${genre}`

 genrename.innerHTML =`${genre}`

let params = new URLSearchParams({
  subject: subject,
  limit: 400,
  
  language: language,
  first_publish_year: [`2023`]
});
  
displayLoading()
fetch(baseUrlo + endpoint + '?' + params)
.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error: ' + res.status);
      }
    
    
})
.then(data => {
  hideLoading()
  
  data.docs.forEach(book => {
    if (book.cover_i ){
      buug.push(book)
     
    }
     
  });
  console.log(buug.length)

  ////sorting books based on demand
    buug.sort(function(b, a){
              var keyA =  a.want_to_read_count ,
                  keyB =  b.want_to_read_count ;
              // Compare the 2 dates
              if(keyA < keyB) return -1;
              if(keyA > keyB) return 1;
              return 0;
            })

      console.log(buug)
      ////passing the filtered fetch data onto the rendering function.
      renderNewBooks(buug)
})
}
  

/////function that renders the newest books in a genre when a genre is clicked 

function renderNewBooks(booksArray){
  
  firstbooksdiv.innerHTML = ` `
  secondbooksdiv.innerHTML = ` `
  if(booksArray.length % 2 === 0 ){

    ///making a new array, splitting it and placing the 2 new book arrays into separate divs
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

                            <p> <span style="font-weight: 700;">Rate?: </span></p>

                            <div class="rating">
                               <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                               <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                               <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                               <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                               <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
                            </div> 


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
                            <p> <span style="font-weight: 700;">Rate?: </span></p>

                            <div class="rating">
                               <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                               <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                               <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                               <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                               <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
                            </div>

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
                            <p> <span style="font-weight: 700;">Rate?: </span></p>

                            <div class="rating">
                               <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                               <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                               <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                               <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                               <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
                            </div>

                        </div>
                  </div>
      
      `
    })
let i = 0
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

                            <p> <span style="font-weight: 700;">Rate?: </span></p>
                            


                            <div class="rating${i}">
                               <input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
                               <input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
                               <input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
                               <input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
                               <input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
                            </div>

                        </div>
                  </div>
      
      ` 
      i++
    })
  }
}
//click events for the genrenavbar/buttons


newReleases.addEventListener('click',renderNewReleases())
bestRated.addEventListener('click',renderBestRated())
supriseMe.addEventListener('click',renderSupriseMe())

////functions for genre navbar
function renderNewReleases(){

  if (genrename){
    handleGenres(genrename.innerText)
  }

}
///function that fetches the best rated books in a genre and renders them
function renderBestRated(){

  
  let buug1 =[]
  let baseUrlo = 'https://openlibrary.org';
  let endpoint = '/search.json';

  let language = 'eng'
  let subject2 = `${genrename.innerText}`
  let params2 = new URLSearchParams({
        subject: subject2,
        limit: 300,
  
        language: language,
        
   });
  
    
    


    
  if (genrename.innerText){
    displayLoading()
fetch(baseUrlo + endpoint + '?' + params2)
.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error: ' + res.status);
      }
    
    
})
.then(data =>{
  hideLoading()
  console.log(data)
  data.docs.forEach(book => {
    if (book.cover_i ){
      buug1.push(book)
     
    }
     
  });
  console.log(buug1.length)
////filtering based on want_to_read-Count
  let filteredBooks = buug1.filter(book => book.want_to_read_count > minReadCount)


    filteredBooks.sort(function(b, a){
              var keyA =  a.want_to_read_count ,
                  keyB =  b.want_to_read_count ;
              // Compare the books
              if(keyA < keyB) return -1;
              if(keyA > keyB) return 1;
              return 0;
            })

      console.log(buug1)
      renderNewBooks(filteredBooks)

})

  } 
}

function renderSupriseMe(){
  console.log('hello')
  let buug1 =[]
  let baseUrlo = 'https://openlibrary.org';
  let endpoint = '/search.json';

  let language = 'eng'
  let subject2 = `${genrename.innerText}`
  let params2 = new URLSearchParams({
        subject: subject2,
        limit: 50,
        sort: 'random',
        language: language,
        
   });
  
  if (genrename.innerText){
    displayLoading()
fetch(baseUrlo + endpoint + '?' + params2)
.then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Error: ' + res.status);
      }
    
    
})
.then(data =>{
  hideLoading()
  console.log(data)
  data.docs.forEach(book => {
    hideLoading()
    if (book.cover_i ){
      buug1.push(book)
     
    }
     
  });
  console.log(buug1.length)
    buug1.sort(function(b, a){
              var keyA =  a.want_to_read_count ,
                  keyB =  b.want_to_read_count ;
              // Compare the books
              if(keyA < keyB) return -1;
              if(keyA > keyB) return 1;
              return 0;
            })

      console.log(buug1)
      renderNewBooks(buug1)

})

  }
}


function getCoverImageUrl(book){
   const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
   return coverUrl
}
})


///stars

const stars = document.querySelector(".stars i")

star.forEach('click',() => {
  console.log(star)
})