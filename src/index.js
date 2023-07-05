

const baseUrl = 'http://openlibrary.org';
const endpoint = '/search.json';
const subject = 'fantasy'; // Filter books with subject 'Fiction'
const limit = 50; // Number of books to fetch
const language = 'eng'
const minReadCount = 5

const params = new URLSearchParams({
  subject: subject,
  limit: limit,
  sort: '',
  language: language,
  first_publish_year: [`2010`]
});

fetch(baseUrl + endpoint + '?' + params)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    // Process the books retrieved
    data.docs.forEach(book => {
     
      const filteredBooks = data.docs.filter(book => book.want_to_read_count > minReadCount);

    // Process the filtered books
    filteredBooks.forEach(book => {
      console.log(book)
      console.log('Title:', book.title);
      console.log('Read Count:', book.want_to_read_count || 'Unknown')
      
      // getCoverImageUrl(book, coverUrl => {
      //   console.log('Title:', book.title);
      //   console.log('Author:', book.author_name ? book.author_name.join(', ') : 'Unknown');
      //   console.log('Read Count:', book.read_count || 'Unknown');
      //   console.log('Cover Image:', coverUrl);
      //   console.log('---');
      // });
    });
    });
  })
  .catch(error => {
    console.log(error);
  });

// const genre = 'fiction';
// const rating = 4;
// const ratingsCount = 1000;
// const apiKey = 'AIzaSyCxW7IiybgVrpn1z-bYXTu4ai_asOaJehU'; // Replace with your actual API key

// const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=subject= ${genre}&categories:${genre}&minRating=${rating}&minRatingsCount=${ratingsCount}&orderBy=newest&key=${apiKey}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Process the fetched data
//     const books = data;
//     console.log(books); // Output the fetched books
//   })
//   .catch(error => {
//     console.log('An error occurred while fetching the books:', error);
//   });

  