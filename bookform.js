const bookForm = document.getElementById('bookForm');
const bookCards = document.getElementById('bookCards');

bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents the refresh

  // this will get the values from the form 
  const imageUrl = document.getElementById('imageUrl').value;
  const price = document.getElementById('price').value;
  const bookTitle = document.getElementById('bookTitle').value;
  const bookAuthor = document.getElementById('bookAuthor').value

  // element for the card to populate below the form
  const card = document.createElement('div');
  card.classList.add('card');

  // this will be content for the card
  const image = document.createElement('img');
  image.src = imageUrl;
  card.appendChild(image);

 const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.textContent = bookTitle;
  cardBody.appendChild(title);

  const priceText = document.createElement('p');
  priceText.textContent = 'Price: $' + price;
  cardBody.appendChild(priceText);

  card.appendChild(cardBody);

  // Appending the card 2 the bookCards area
  bookCards.appendChild(card);

  // Clear the form inputs after a s
  bookForm.reset();
});

  // Make a call to the API
  // POST request getting data from the api created in intellij

  // link is to SQL but i need to link api instead
  const apiUrl = '?';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      imageUrl: imageUrl,
      price: price,
      bookTitle: bookTitle,
      bookAuthor: bookAuthor
    })
  })
    .then(response => response.json())
    .then(data => {
      // confused about this point | api response will come through
      console.log(data);
    })
    .catch(error => {
      // So this will make sure that if any errors occur during the request itll give msg error
      console.error('Error:', error);
    });
