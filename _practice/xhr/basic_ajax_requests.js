// * Codecademy
// ! AJAX 'GET' request using XMLHttpRequest object
// create a new request and asign the api-url to a variable
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
// * for 'POST'
const data = JSON.stringify({id: '200'});

// set the responseType to json - how the response is going to be formatted
xhr.responseType = 'json';

// set the event handler to an anyonymous function
xhr.onreadystatechange = () => {
  // this conditional statement checks to see if the request has finished
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
}

// call the open method and pass the GET and url as arguments
// .open() creates a new request & the arguments passed in determine the type and URL of the request
// * GET
xhr.open('GET', url);
xhr.send();

// * POST
xhr.open('POST', url);
xhr.send();