// The confirmation popup is intentionally called only after a valid new recommendation is added.
const recommendationForm = document.getElementById('recommendationForm');
const recommendationText = document.getElementById('recommendationText');
const recommendationList = document.getElementById('recommendationList');
const successPopup = document.getElementById('successPopup');
const closePopup = document.getElementById('closePopup');

document.getElementById('year').textContent = new Date().getFullYear();

function showPopup() {
  successPopup.classList.add('show');
  successPopup.setAttribute('aria-hidden', 'false');
}

function hidePopup() {
  successPopup.classList.remove('show');
  successPopup.setAttribute('aria-hidden', 'true');
}

recommendationForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const message = recommendationText.value.trim();

  if (message.length < 8) {
    recommendationText.setCustomValidity('Please enter at least 8 characters.');
    recommendationText.reportValidity();
    recommendationText.setCustomValidity('');
    return;
  }

  const card = document.createElement('blockquote');
  card.className = 'recommendation-card';

  const quoteMark = document.createElement('span');
  quoteMark.className = 'quote-mark';
  quoteMark.textContent = '“';

  const paragraph = document.createElement('p');
  paragraph.textContent = message;

  const citation = document.createElement('cite');
  citation.textContent = '— Website visitor';

  card.append(quoteMark, paragraph, citation);
  recommendationList.appendChild(card);
  recommendationForm.reset();

  // This is the only place showPopup is called: after a new recommendation is appended.
  showPopup();
});

closePopup.addEventListener('click', hidePopup);
