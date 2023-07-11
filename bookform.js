// this gets element [from html] (by ID) and assigns it to var
const bookForm = document.getElementById('bookForm');
const bookCards = document.getElementById('bookCards');

// when form is submitted this will run 
bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents the refresh

  // this will get the values from the form 
  const imageUrl = document.getElementById('imageUrl').value;
  const price = document.getElementById('price').value;
  const bookTitle = document.getElementById('bookTitle').value;

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

  // Clear the form inputs after a submit
  bookForm.reset();
});

