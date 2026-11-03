const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", function(){
    const httpRequest = new XMLHttpRequest();
    let searchItem = document.getElementById("searchItem").value;
    let url = "superheroes.php?query=" + encodeURIComponent(searchItem);
    
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                result.innerHTML = httpRequest.responseText;
            }
            else{
                result.innerHTML = "Superhero not found";
            }
        }
    }
    httpRequest.open('GET',url);
    httpRequest.send();

});
