
//ao carregar a pag
let request = new XMLHttpRequest();

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



//ao clicar no botão
btn.addEventListener("click" , function () {
    
    let dataInput = document.querySelector('#dateInput').value;
   

    let req2 = new XMLHttpRequest();
    req2.open('GET', `https://api.nasa.gov/planetary/apod?api_key=hewuCqk0WkXdSiZXZV3VZKefJ6lqDP4pjdomuZVU&date=${dataInput}`);
    
    console.log(req2)

    req2.onload = () => {
       let objJson = JSON.parse(req2.responseText);
       
        
    titulo.textContent = objJson.title
    date.textContent = objJson.date
    imagem.src = objJson.hdurl
    text.textContent = objJson.explanation
    copyright.textContent = objJson.copyright


     };

    
    req2.send()

})

