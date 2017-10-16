var request = new XMLHttpRequest();
request.open('POST', 'http://localhost:3050/api/numbylearningpath', true);
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    console.log('success!');
    var data = JSON.parse(request.responseText);
  } else {
    console.log('we got an error');
  }
}

request.send();