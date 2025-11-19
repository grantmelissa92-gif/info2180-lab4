document.getElementById("searchbtn").addEventListener("click", function(){

    let query = document.getElementById("herosearch").value.trim();
    query= query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    fetch("superheroes.php?query=" + encodeURIComponent(query))
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "SUPERHERO NOT FOUND";
        });
});