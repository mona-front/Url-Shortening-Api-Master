const form = document.getElementById('form');
const formInput = document.getElementById('input');
const message = document.getElementById('message');
const shortLinks = document.getElementById('shortLinks');
const copy = document.getElementById('copyBtn');
const copied = document.getElementById('copiedBtn');

// form submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    showMessage();
    shortUrl();
});



// show message function
function showMessage() {
    const inputValue = formInput.value.trim();

    if (inputValue === '') {
        setErrorFor(message, 'Please add a link');
    }
    if (inputValue !== '') {
        shortLinks.classList.add('short-links');
        copy.style.display = 'block';
        removeError(message);
    }

}


// shorten url function
function shortUrl() {
    const input = document.getElementById('input').value;
    document.getElementById('userLink').innerHTML = input;
    fetch(`https://api.shrtco.de/v2/shorten?url=${input}/`).then(response => response.json()).then(res => {
        document.getElementById('shrtLnk').value = res.result.short_link;
    })
}


// copy btn click
copy.addEventListener('click', () => {
    document.querySelector('#shrtLnk').select();
    document.execCommand('copy');
    copy.style.display = 'none';
    copied.style.display = 'block';
})


// set error function
function setErrorFor(userInput, message) {
    const urlInput = userInput.parentElement;
    const span = urlInput.querySelector('#message');

    span.innerText = message;
    urlInput.classList.add('error-message');
}


// remove error function
function removeError(userInput) {
    const urlInput = userInput.parentElement;
    const span = urlInput.querySelector('#message');

    span.innerText = '';
    urlInput.classList.remove('error-message');
}