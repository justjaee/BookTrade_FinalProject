// Get the More button element
const moreButton = document.querySelector('.more-button');

// Get the hidden text element
const hiddenText = document.getElementById('hidden-text');

// Add click event listener to the More button
moreButton.addEventListener('click', function() {
  // Toggle the display of the hidden text
  hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
});