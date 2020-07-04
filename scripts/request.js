let request = new XMLHttpRequest;
request.open('GET','https://api.nasa.gov/planetary/apod?api_key=hewuCqk0WkXdSiZXZV3VZKefJ6lqDP4pjdomuZVU');

request.onload = function() {
    let jsonData = JSON.parse(request.responseText);
    console.log(jsonData);



    titulo.textContent = jsonData.title;
    date.textContent = jsonData.date;
    imagem.src = jsonData.hdurl;
    text.textContent = jsonData.explanation;
    copyright.textContent = jsonData.copyright
    

}

request.send();

