

const baseUrl = 'http://openlibrary.org';
const endpoint = '/search.json';
const subject = 'fantasy'; // Filter books with subject 'Fiction'
const limit = 50; // Number of books to fetch
const language = 'eng'

const params = new URLSearchParams({
  subject: subject,
  limit: limit,
  sort: 'new',
  language: language,
  publish_year: `[2023]`
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
      console.log(book);
    });
  })
  .catch(error => {
    console.log(error);
  });

