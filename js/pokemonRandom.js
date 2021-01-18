var pkName;
revealButton = document.getElementById('button1');
randomize = document.getElementById('button2')
revealText = document.getElementById('name');
image = document.getElementById("picture")



const userAction = async () => {
    image.src = "images/loading6.gif"
    pokemonID = Math.floor((Math.random() * 898));
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonID.toString());
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson);
    pkName = myJson.name;
    pictureUrl = myJson.sprites.front_default
    image.src = pictureUrl
    revealText.innerHTML = "?????"
    console.log(pictureUrl)
    console.log(pkName)
    return myJson
}

function revealPokemon(){
    revealText.innerHTML = pkName;
}

revealButton.addEventListener("click", revealPokemon);
randomize.addEventListener("click", userAction);
userAction();