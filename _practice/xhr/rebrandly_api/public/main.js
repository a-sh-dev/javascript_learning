// Information to reach API - key obtain from Rebrandly
const apiKey = 'b66663b6fb094b10846178cd6067b606';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  // save the value of the input field in urlToShorten
  const urlToShorten = inputField.value;
  // create data to POST
  const data = JSON.stringify( {destination: urlToShorten} );
  
  // create a new xhr operator
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  xhr.open('POST', url);
  // access the Rebrandly API by creating a header with two key-value pairs, it must iclude 'Content-type' and 'apikey'
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  // call the send method on xhr
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
