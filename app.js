const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
    fetch('superheroes.php')
    .then(response => response.text())
    .then(data =>{
        alert(data);
    })
    .catch(error =>{
        alert("Unable to show superheroes");
    });

});
